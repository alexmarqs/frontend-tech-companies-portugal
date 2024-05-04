import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.REDIS_URL || "",
  token: process.env.REDIS_TOKEN || "",
});

export const VIEWS_REDIS_KEY = "pageviews";

export const registerView = (companySlug: string, bucket: string) => {
  return redis.zincrby([VIEWS_REDIS_KEY, bucket].join(":"), 1, companySlug);
};

export const createDailyBucket = () => {
  return new Date().setHours(0, 0, 0, 0).toString();
};
