"use client";

import { LineChart } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button } from "./ui/button";

export default function AnalyticsButton() {
  const segment = useSelectedLayoutSegment();
  const isCompanyListPage = segment === "(companies-list)";

  if (!isCompanyListPage) {
    return null;
  }

  return (
    <Button asChild className="px-3" variant="outline">
      <Link href="/analytics">
        <LineChart className="mr-2 shrink-0" size={16} />
        Analytics
      </Link>
    </Button>
  );
}
