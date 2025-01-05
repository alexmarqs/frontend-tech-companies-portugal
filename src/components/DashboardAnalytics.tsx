"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { PageViewsData } from "@/lib/types";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

type DashboardAnalyticsProps = {
  timeSeriesData: PageViewsData;
  totalViews: number;
  topPages: { name: string; value: number }[];
};

const chartConfig = {
  views: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
  name: {
    color: "hsl(var(--background))",
  },
  value: {
    label: "Views",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export const DashboardAnalytics = ({
  timeSeriesData,
  totalViews,
  topPages,
}: DashboardAnalyticsProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Views (15 days)</CardTitle>
          <CardDescription>{`Total views: ${totalViews}`}</CardDescription>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[200px] w-full" config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={timeSeriesData.map((data) => ({
                time: new Date(data.time).toISOString().split("T")[0],
                views: Object.values(data.views).reduce((a, b) => a + b, 0),
              }))}
              margin={{
                left: 12,
                right: 12,
              }}
            >
              <CartesianGrid vertical={false} />
              <XAxis
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <YAxis
                dataKey="views"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
              />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                dataKey="views"
                type="linear"
                fill="var(--color-views)"
                fillOpacity={0.4}
                stroke="var(--color-views)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
      <Card className="col-span-3">
        <CardHeader>
          <CardTitle>Top 5 pages views (15 days)</CardTitle>
        </CardHeader>
        <CardContent>
          <ChartContainer className="h-[200px] w-full" config={chartConfig}>
            <BarChart
              accessibilityLayer
              data={topPages}
              layout="vertical"
              margin={{
                right: 20,
              }}
            >
              <YAxis
                dataKey="name"
                type="category"
                tickLine={false}
                tickMargin={10}
                axisLine={false}
                hide
              />
              <XAxis dataKey="value" type="number" hide />
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Bar
                dataKey="value"
                layout="vertical"
                fill="var(--color-views)"
                radius={4}
              >
                <LabelList
                  dataKey="name"
                  position="insideLeft"
                  offset={3}
                  className="fill-[--color-name]"
                  fontSize={12}
                  formatter={(value: string) =>
                    value === "/" ? value : value.split("/").pop()
                  }
                />
                <LabelList
                  dataKey="value"
                  position="right"
                  offset={8}
                  className="fill-foreground"
                  fontSize={12}
                />
              </Bar>
            </BarChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
};
