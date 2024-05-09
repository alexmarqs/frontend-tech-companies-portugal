import { DashboardAnalytics } from "@/components/DashboardAnalytics";

import { MS_IN_DAY, VIEWS_REDIS_KEY, getDailyBucket } from "@/lib/utils";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

const redis = Redis.fromEnv();

export default async function AnalyticsPage() {
  const now = Date.now();

  const keys = Array.from({ length: 15 }, (_, i) => {
    const date = now - i * MS_IN_DAY;

    const timestamp = getDailyBucket(date);

    return [VIEWS_REDIS_KEY, timestamp].join(":");
  });

  const results = await Promise.all(
    keys.map((key) => redis.zrange(key, 0, -1, { withScores: true })),
  );

  const viewsData = results
    .map((result: any, index) => {
      const bucket = keys[index].split(":").pop();

      if (!bucket) {
        return undefined;
      }

      const views: Record<string, number> = {};

      for (let i = 0; i < result.length; i += 2) {
        views[result[i]] = parseInt(result[i + 1] as string);
      }

      return { time: parseInt(bucket), views };
    })
    .filter((data) => data !== undefined) as {
    time: number;
    views: Record<string, number>;
  }[];

  const viewsData15days = viewsData.reverse();

  const totalViewsPerPage15days = viewsData15days.reduce(
    (acc, data) => {
      Object.entries(data.views).forEach(([_, views]) => {
        acc[_] = (acc[_] ?? 0) + views;
      });

      return acc;
    },
    {} as Record<string, number>,
  );

  const totalViews15days = Object.values(totalViewsPerPage15days).reduce(
    (acc, views) => acc + views,
    0,
  );

  const top5Pages15Days = Object.entries(totalViewsPerPage15days)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([name, value]) => ({ name, value }));

  return (
    <div className="flex-1">
      <DashboardAnalytics
        timeSeriesData={viewsData15days}
        totalViews={totalViews15days}
        topPages={top5Pages15Days}
      />
    </div>
  );
}
