import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_DIR = path.join(__dirname, "../src/assets/icons");
const OUTPUT_FILE = path.join(__dirname, "../registry/assets/icons.ts");

const result: string[] = [];

result.push("export const icon = {\n");

for (const file of fs.readdirSync(INPUT_DIR, { withFileTypes: true })) {
  if (!file.isFile() || path.extname(file.name) !== ".svg") continue;

  const key = path.basename(file.name, ".svg");
  const svg = fs
    .readFileSync(path.join(INPUT_DIR, file.name), "utf8")
    .replace(/\r?\n|\r/g, "")
    .replace(/#0A1E12/g, "var(--icon-color)");

  result.push(`  ${key}: '${svg}',\n`);
}
result.push("};\n\n");

result.push("export type Icon = keyof typeof icon;");

fs.writeFileSync(OUTPUT_FILE, result.join(""));

console.log("🟢 Generated icons.ts");
