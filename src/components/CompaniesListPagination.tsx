import { SearchParams } from "@/lib/types";
import { cn } from "@/lib/utils";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

type CompaniesListPaginationProps = {
  currentPage: number;
  totalPages: number;
  searchParams?: SearchParams;
};

export default function CompaniesListPagination({
  totalPages,
  currentPage,
  searchParams,
}: CompaniesListPaginationProps) {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const createPageUrl = (page: number) => {
    const currentUrlSearchParams = new URLSearchParams(searchParams);

    if (page === 1) {
      // Remove the page query param if it's the first page
      currentUrlSearchParams.delete("page");
    } else {
      currentUrlSearchParams.set("page", String(page));
    }

    return `/?${currentUrlSearchParams.toString()}`;
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex basis-1/2 justify-end text-sm text-muted-foreground">
        Page {currentPage} of {totalPages}
      </div>
      <div className="inline-flex flex-row items-center gap-2">
        <Button
          className={cn(
            isPreviousDisabled && "pointer-events-none text-muted-foreground",
          )}
          variant="outline"
          size="sm"
          asChild
        >
          <Link className="!px-2" href={createPageUrl(1)}>
            <ChevronsLeft className="shrink-0" size={16} />
          </Link>
        </Button>
        <Button
          className={cn(
            isPreviousDisabled && "pointer-events-none text-muted-foreground",
          )}
          variant="outline"
          size="sm"
          asChild
        >
          <Link className="!px-2" href={createPageUrl(currentPage - 1)}>
            <ChevronLeft className="shrink-0" size={16} />
          </Link>
        </Button>
        <Button
          variant="outline"
          asChild
          size="sm"
          className={cn(
            isNextDisabled && "pointer-events-none text-muted-foreground",
          )}
        >
          <Link className="!px-2" href={createPageUrl(currentPage + 1)}>
            <ChevronRight className="shrink-0" size={16} />
          </Link>
        </Button>
        <Button
          variant="outline"
          asChild
          size="sm"
          className={cn(
            isNextDisabled && "pointer-events-none text-muted-foreground",
          )}
        >
          <Link className="!px-2" href={createPageUrl(totalPages)}>
            <ChevronsRight className="shrink-0" size={16} />
          </Link>
        </Button>
      </div>
    </div>
  );
}
