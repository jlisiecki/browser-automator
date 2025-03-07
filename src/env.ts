import "dotenv/config";
import z from "zod";

const envSchema = z.object({
  CHROME_DEBUG_PORT: z.string().default("9222"),
  CHROME_PROFILE: z.string().default("Default"),
});

export type Env = z.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
