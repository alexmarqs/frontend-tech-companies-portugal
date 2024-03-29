"use client";

import { FolderSearch } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { Button } from "./ui/button";

export default function ExploreButton() {
  const segment = useSelectedLayoutSegment();
  const isCompanyPage = segment === "company";

  if (!isCompanyPage) {
    return null;
  }

  return (
    <Button asChild className="px-3" variant="outline">
      <Link href="/">
        <FolderSearch className="mr-2 shrink-0" size={16} />
        Explore companies
      </Link>
    </Button>
  );
}
