"use client";

import { LineChart } from "lucide-react";
import { useSelectedLayoutSegment } from "next/navigation";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export default function AnalyticsButton() {
  const segment = useSelectedLayoutSegment();
  const isCompanyListPage = segment === "(companies-list)";

  if (!isCompanyListPage) {
    return null;
  }

  return (
    <Button className="px-3" variant="outline" disabled>
      <LineChart className="mr-2 shrink-0" size={16} />
      Analytics
      <Badge className="ml-2 rounded-md text-xs">Coming soon</Badge>
    </Button>
  );
}
