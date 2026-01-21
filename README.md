Configure path aliases in `tsconfig.json`
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

Configure path alises in `tsconfig.app.json`:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": [
        "./src/*"
      ]
    }
  }
}
```

Update `vite.config.ts`:
```ts
import path from "path";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

Add the following `components.json` file to your projects root directory:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "konverto-lab",
  "typescript": true,
  "tailwind": {
    "config": "",
    "css": "css/global.css",
    "baseColor": "neutral",
    "cssVariables": true,
  },
  "rsc": false,
  "aliases": {
    "utils": "@/utils",
    "components": "@/components",
    "ui": "@/components/ui",
    "styles": "@/styles"
  },
  "registries": {
    "@konverto": "https://konverto-development.github.io/konverto-lab-ui/r/{name}.json"
  }
}
```
Change individual aliases to match your project structure.
Some of the settings do nothing in the context of this project, such as`tailwind`, `tsx`, `rsc`.
The CLI expects those to be there, so this is more like a workaround.

Update your root css file (typically `globals.css`) to import the *Konverto Lab* style tokens:

```css
```

Consult official shadcn documentation:
[](https://ui.shadcn.com/docs/cli)

Add components by running:

```
pnpm dlx shadcn@latest add @konverto-lab/button

or

npx shadcn@latest add @konverto-lab/button
```

Add this definition somewhere at the top of your root css:

```css
@import "@/styles/tokens.css";

:root {
  --font-brand: url(/* path to font file */);
}
```

Variant names are inspired by Park UI:
[](https://park-ui.com/docs/components/button#variants)
