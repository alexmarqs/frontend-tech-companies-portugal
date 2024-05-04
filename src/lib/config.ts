import { z } from "zod";

const envSchema = z.object({
  REDIS_URL: z.string(),
  REDIS_TOKEN: z.string(),
});

const env = envSchema.safeParse(process.env);

if (!env.success) {
  throw new Error("Invalid environment variables", env.error);
}

export const config = {
  redis: {
    url: env.data.REDIS_URL,
    token: env.data.REDIS_TOKEN,
  },
};
