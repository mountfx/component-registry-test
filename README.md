## Configuration

Add `baseUrl` and `paths` properties to the `compilerOptions` section of the
`tsconfig.json` and `tsconfig.app.json` files:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Add the following code to the `tsconfig.app.json` file to resolve paths, for your IDE:
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
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

Add a `components.json` file to your projects root directory with the following configuration:
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
Some of the settings do nothing in the context of this project, such as the entire `tailwind` section.
The CLI expects those to be there, so this is more like a workaround.

## CLI

Add components by running:
```
pnpm dlx shadcn-vue@latest add @konverto-lab/button
```
or
```
npx shadcn-vue@latest add @konverto-lab/button
```

Alternatively install `shadcn-vue` as a development dependency:

```
pnpm add -D shadcn-vue
shadcn-vue add @konverto-lab/button
```

Consult the shadcn-vue documentation for a complete list of CLI commands and options:<br/>
[https://www.shadcn-vue.com/docs/cli](https://www.shadcn-vue.com/docs/cli)

## Usage

Use components by importing them like so:

```ts
// UI components reside in the @/components/ui folder.
// Each component exposes props and template slots, which are intended to serve as its primary public API.
// If needed, you can extend or modify the top‑level wrapper component directly in your source code..
import Combobox from "@/components/ui/combobox/Combobox.vue";
// Block components reside in the @/components/blocks folder.
// Since it's a block, it is intended to be modified directly.
import Chat from "@/components/blocks/chat/Chat.vue";
```

All components installed through the CLI will be copied into the directories specified
by the aliases defined in `components.json`.

`ui` components are intended to be used as closed, reusable primitives.
Required and expected configuration options are exposed through props and template slots.
You may still customize their behavior or styling by modifying the top-level component.

All other components, such as `blocks` or `pages`, are intended to be added directly to the
project source for modification. Their content is usually hardcoded and serves as a default
or placeholder that can be replaced or extended.

## CSS tokens and style

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

The component library shadcn-vue is based on:<br/>
[https://ui.shadcn.com](https://ui.shadcn.com)

Headless UI library:<br/>
[https://ark-ui.com](https://ark-ui.com)
