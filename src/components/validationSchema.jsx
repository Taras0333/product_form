import { z } from "zod";

const validetionObj = z.object({
  product_title: z.string().min(1, { message: "Product Title is required" }),
  product_description: z
    .string()
    .default("")
    .transform((string) => (string.includes("<br>") ? "" : string)),
  product_bullets: z
    .array(
      z.object({
        value: z.string(),
      })
    )
    .default([]),
  product_keywords: z
    .array(
      z.object({
        value: z.string(),
        label: z.string(),
      })
    )
    .default([]),
});

export default validetionObj;
