import * as z from "zod";

const UISchema = z.object({
  name: z.string(),
  dependencies: z.array(z.string()),
  registryDependencies: z.array(z.string()),
});

export interface RegistryItem {
  name: string;
  registryDependencies: 
};
