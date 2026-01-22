import fs from "node:fs";
import path from "node:path";

function generateIcons() {
  const cwd = process.cwd();
  const inputDir = path.join(cwd, "src/assets/icons");
  const outputFile = path.join(cwd, "assets/icons.ts");

  const result: string[] = [];
  result.push("export const icon = {\n");
  for (const file of fs.readdirSync(inputDir, { withFileTypes: true })) {
    if (!file.isFile() || path.extname(file.name) !== ".svg") continue;

    const name = path.basename(file.name, ".svg");
    const svg = fs
      .readFileSync(path.join(inputDir, file.name), "utf8")
      .replace(/\r?\n|\r/g, "")
      .replace(/#0A1E12/g, "var(--icon-color)");

    result.push(`  "${name}": '${svg}',\n`);
  }
  result.push("};\n");
  result.push("\n");
  result.push("export type Icon = keyof typeof icon;");

  fs.writeFileSync(outputFile, result.join(""));

  console.log("🟢 Generated icons.ts");
}

generateIcons();
