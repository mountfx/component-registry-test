export default {
  name: "icon",
  type: "registry:component",
  registryDependencies: ["tokens"],
  files: [
    {
      path: "assets/icons.ts",
      type: "registry:file",
      target: "~/src/assets/icons.ts",
    },
  ],
};
