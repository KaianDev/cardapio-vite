import { z } from "zod";

export const formSchemaAddFood = z.object({
  title: z.string(),
  price: z.number(),
  image: z.string().url(),
});

export type AddForm = z.infer<typeof formSchemaAddFood>;

export const formSchemaLogin = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export type Login = z.infer<typeof formSchemaLogin>;