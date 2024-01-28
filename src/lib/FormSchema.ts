import { z } from "zod";

export const formSchema = z.object({
  title: z.string(),
  price: z.number(),
  image: z.string().url(),
});

export type AddForm = z.infer<typeof formSchema>;
