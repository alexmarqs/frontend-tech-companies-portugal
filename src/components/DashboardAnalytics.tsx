"use client";

import { PageViewsData } from "@/lib/types";
import { AreaChart, BarList, Card, Metric, Text, Title } from "@tremor/react";

type DashboardAnalyticsProps = {
  timeSeriesData: PageViewsData;
  totalViews: number;
  topPages: { name: string; value: number }[];
};

export const DashboardAnalytics = ({
  timeSeriesData,
  totalViews,
  topPages,
}: DashboardAnalyticsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="col-span-3">
        <Title>Views @ 15 days</Title>
        <div className="flex items-baseline gap-2">
          <Metric>{totalViews}</Metric>
          <Text>Total views</Text>
        </div>
        <AreaChart
          index="time"
          colors={["blue"]}
          yAxisWidth={30}
          className="mt-3 h-72"
          data={timeSeriesData.map((data) => ({
            time: new Date(data.time).toISOString().split("T")[0],
            views: Object.values(data.views).reduce((a, b) => a + b, 0),
          }))}
          categories={["views"]}
        />
      </Card>
      <Card className="col-span-3 h-[20rem]">
        <Title>Top 5 pages views @ 15 days</Title>
        <BarList className="mt-5" data={topPages} />
      </Card>
    </div>
  );
};
