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

---

Add the following `components.json` file to your projects root directory:
```json
{
  "$schema": "https://shadcn-vue.com/schema.json",
  "style": "konverto-lab",
  "typescript": true,
  "tailwind": {
    "config": "",
    "css": "css/global.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "aliases": {
    "utils": "@/utils",
    "components": "@/components",
    "ui": "@/components/ui",
    "styles": "@/styles"
  },
  "registries": {
    "@konverto-lab": "https://mountfx.github.io/component-registry-test/r/{name}.json"
  }
}
```
Change individual aliases to match your project structure.
Some of the settings do nothing in the context of this project, such as`tailwind`.
The CLI expects those to be there, so this is more like a workaround.

---

Add components by running:
```
pnpm dlx shadcn-vue@latest add @konverto-lab/button

or

npx shadcn-vue@latest add @konverto-lab/button
```

---

Then use UI components by importing them like so:

```ts
import Combobox from "@/components/ui/combobox/Combobox.vue";
```

All components installed through the CLI will be copied into the directories specified
by the aliases defined in `components.json`.

`ui` components are intended to be used as closed, reusable primitives.
Configuration is exposed only through props or template slots.
You may still customize their behavior or styling by modifying the top-level component.

All other components, such as `blocks` or `pages`, are intended to be added directly to the
project source for modification. Their content is usually hardcoded and serves as a default
or placeholder that can be replaced or extended.

---

Consult the shadcn-vue documentation for a complete list of CLI commands and options:<br/>
[https://www.shadcn-vue.com/docs/cli](https://www.shadcn-vue.com/docs/cli)

---

Add this definition somewhere at the top of your root css:
```css
@import "src/assets/tokens.css";

:root {
  --font-brand: url(/* path to font file */);
}
```

or reference it directly in your `index.html`:

```html
<html lang="en">
	<head>
		<link href="/src/assets/tokens.css" rel="stylesheet">
	</head>
</html>

```

---

**Useful links:**

Specification for component registries:<br/>
[https://www.components.build](https://www.components.build)

Specification for JSON Schema:<br/>
[https://json-schema.org](https://json-schema.org)

CLI Tool used for building and running the component registry:<br/>
[https://www.shadcn-vue.com](https://www.shadcn-vue.com)

Headless UI library:<br/>
[https://ark-ui.com](https://ark-ui.com)
