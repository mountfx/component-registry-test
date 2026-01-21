import path from "node:path";
import { exec } from "node:child_process";

import type { Plugin, ResolvedConfig } from "vite";

export function watchIcons(): Plugin {
  let config: ResolvedConfig;

  return {
    name: "watch-and-generate-icons",
    configResolved(resolved) {
      config = resolved;
    },
    configureServer(server) {
      const inDir = path.resolve(config.root, "src/assets/icons");
      const outDir = path.resolve(config.root, "registry/assets");

      server.watcher.add(inDir);

      server.watcher.on("change", (file) => {
        if (file.startsWith(outDir)) return;
        console.log(`Icon changed: ${file}`);
        exec("pnpm run generate:icons", (err, stdout) => {
          if (err) {
            console.error(err);
            return;
          }
          console.log(stdout);
        });
      });
    }
  }
}
