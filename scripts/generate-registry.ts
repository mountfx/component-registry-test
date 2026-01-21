import fs from "node:fs";
import path from "node:path";

import * as z from "zod";

// TODO: Explore possibility to use JSON schema definitions as opposed to zod schemas
//       and validate using `z.fromJSONSchema()`. This API is still experimental at the
//       time of writing this.
//       https://zod.dev/json-schema?id=zfromjsonschema

const FileSchema = z.object({
  path: z.string(),
  type: z.string(),
  target: z.optional(z.string()),
});

const ComponentSchema = z.object({
  name: z.string(),
  dependencies: z.optional(z.array(z.string())),
  registryDependencies: z.optional(z.array(z.string().transform((value) => `https://mountfx.github.io/component-registry-test/r/${value}.json`))),
  files: z.optional(z.array(FileSchema)),
});

function getComponent(folder: fs.Dirent) {
  const dir = path.join(folder.parentPath, folder.name);
  let item: any = {};
  let itemPath = "";
  for (const file of fs.readdirSync(dir)) {
    if (path.extname(file) === ".vue") {
      itemPath = path.join("registry/components", folder.name, file);
    }
    if (path.extname(file) === ".json") {
      const bytes = fs.readFileSync(path.join(dir, file), "utf8");
      try {
        item = ComponentSchema.parse(JSON.parse(bytes));
      } catch (e) {
        console.log("Failed to parse file:");
        console.log(itemPath, "\n");
        throw new Error(e);
      }
    }
  }
  item.type = "registry:component";
  item.files = item.files ? item.files : [];
  item.files = [{ path: itemPath, type: "registry:component" }, ...item.files];

  return item;
}

export function getComponents() {
  const dir = path.join(process.cwd(), "registry/components");
  const components: object[] = [];
  for (const folder of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!folder.isDirectory()) continue;
    components.push(getComponent(folder));
  }
  return components;
}

function generateRegistry() {
  const registry = {
    "$schema": "https://shadcn-vue.com/schema/registry.json",
    name: "konverto-lab-ui",
    homepage: "https://konverto.eu",
    items: [
      ...getComponents(),
    ],
  };

  fs.writeFileSync(path.join(process.cwd(), "registry.json"), JSON.stringify(registry, null, 2));

  console.log("🟢 Generated registry.json\n");
}

generateRegistry();
