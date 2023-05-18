import * as z from "zod";

export const userAuthSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string(),
});
