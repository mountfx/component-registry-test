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

async function getUiComponent(folder: fs.Dirent) {
  const dir = path.join(folder.parentPath, folder.name);
  const files = fs.readdirSync(dir);
  const definitionFile = `${folder.name}.ts`;
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
    return {
      name: definition.name,
      type: "registry:component",
      dependencies: definition.dependencies,
      registryDependencies: definition.registryDependencies,
      files: [
        {
          path: path.join("registry/components/ui", folder.name, componentFile),
          type: "registry:component",
        },
        ...(definition.files || []),
      ],
    };
  } catch (e) {
    console.log(`Failed to parse definition at location ${dir}.`);
    throw new Error(e);
  }
}

async function getUiComponents() {
  const dir = path.join(process.cwd(), "registry/components/ui");
  const components: object[] = [];
  for (const folder of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    components.push(await getUiComponent(folder));
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
      ...await getUiComponents(),
    ],
  };

  fs.writeFileSync(path.join(process.cwd(), "registry.json"), JSON.stringify(registry, null, 2));

  console.log("🟢 Generated registry.json\n");
}

generateRegistry();
