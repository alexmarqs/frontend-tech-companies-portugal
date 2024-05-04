import { Redis } from "@upstash/redis";
import { config } from "./config";

const redis = new Redis({
  url: config.redis.url,
  token: config.redis.token,
});

export const VIEWS_REDIS_KEY = "pageviews";

export const registerPageView = (companySlug: string, bucket: string) => {
  return redis.zincrby([VIEWS_REDIS_KEY, bucket].join(":"), 1, companySlug);
};

export const createDailyBucket = () => {
  return new Date().setHours(0, 0, 0, 0).toString();
};
