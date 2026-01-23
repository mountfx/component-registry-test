import fs from "node:fs";
import path from "node:path";

import * as z from "zod";

// TODO: Explore possibility to use JSON schema definitions as opposed to zod schemas
//       and validate using `z.fromJSONSchema()`. This API is still experimental at the
//       time of writing this.
//       https://zod.dev/json-schema?id=zfromjsonschema

function getTokens() {
  return [
    {
      name: "tokens",
      type: "registry:style",
      files: [{
        path: "registry/tokens.css",
        type: "registry:file",
        target: "~/src/assets/tokens.css",
      }],
    },
  ];
}

const ComponentSchema = z.object({
  name: z.string(),
  dependencies: z.optional(z.array(z.string())),
  registryDependencies: z.optional(
    z.array(
      z.string().transform((value) => `https://mountfx.github.io/component-registry-test/r/${value}.json`),
    ),
  ),
  files: z.optional(z.array(
    z.object({
      path: z.string(),
      type: z.string(),
      target: z.optional(z.string()),
    }),
  )),
});

export type RegistryComponent = z.infer<typeof ComponentSchema>;

const lookup = {
  "ui": "registry:ui",
  "blocks": "registry:block",
};

async function getItem(dir: string, kind: string) {
  const files = fs.readdirSync(dir);
  const definitionFile = `${path.basename(dir)}.ts`;
  const componentFile = files.find((f) => f.endsWith(".vue"));

  if (!definitionFile || !componentFile) {
    const errors: string[] = [];
    if (!definitionFile) errors.push(`Component in ${dir} must contain a .ts file.`);
    if (!componentFile) errors.push(`Component in ${dir} must contain a .vue file.`);
    errors.map((e) => console.log(e, "\n"));
    throw new Error("Aborted due to missing requirements.");
  }

  const module = await import(path.join(dir, definitionFile));
  try {
    const definition = ComponentSchema.parse(module.default);
    const type = lookup[kind];
    return {
      name: definition.name,
      type,
      dependencies: definition.dependencies,
      registryDependencies: definition.registryDependencies,
      files: [
        {
          path: path.join("registry/components", kind, path.basename(dir), componentFile),
          type,
        },
        ...(definition.files || []),
      ],
    };
  } catch (e) {
    console.log(`Failed to parse definition at location ${dir}.`);
    throw new Error(e);
  }
}

async function getItems(dir: string) {
  const components: RegistryComponent[] = [];
  for (const folder of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    components.push(await getItem(path.join(dir, folder.name), path.basename(dir)));
  }
  return components;
}

async function getComponents() {
  const dir = path.join(process.cwd(), "registry/components");
  const components: RegistryComponent[] = [];
  for (const folder of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    components.push(...await getItems(path.join(dir, folder.name)));
  }
  return components;
}

async function generateRegistry() {
  const registry = {
    "$schema": "https://shadcn-vue.com/schema/registry.json",
    name: "konverto-lab-ui",
    homepage: "https://konverto.eu",
    items: [
      ...getTokens(),
      ...await getComponents(),
    ],
  };

  fs.writeFileSync(path.join(process.cwd(), "registry.json"), JSON.stringify(registry, null, 2));

  console.log("🟢 Generated registry.json\n");
}

generateRegistry();
