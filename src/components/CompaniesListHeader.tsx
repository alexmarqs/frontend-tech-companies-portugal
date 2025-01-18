import { Company } from "@/lib/types";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  Clock,
} from "lucide-react";
import Link from "next/link";
import { ReadonlyURLSearchParams } from "next/navigation";
import { usePaginationUtils } from "./hooks/usePaginationUtils";
import { Badge } from "./ui/badge";

type CompaniesListHeaderProps = {
  updatedAtISODate: string;
  currentPage: number;
  totalPages: number;
  filteredCompanies: Company[];
  searchParams?: ReadonlyURLSearchParams;
};

export const CompaniesListHeader = ({
  updatedAtISODate,
  currentPage,
  totalPages,
  filteredCompanies,
  searchParams,
}: CompaniesListHeaderProps) => {
  const { isPreviousDisabled, isNextDisabled, createPageUrl } =
    usePaginationUtils({ currentPage, totalPages, searchParams });

  return (
    <>
      <Badge
        variant="outline"
        className="rounded-none bg-white px-1 gap-1 h-6 whitespace-nowrap"
      >
        <Clock size={14} />
        {formatDistanceToNow(new Date(updatedAtISODate))} ago
      </Badge>
      <Badge
        variant="outline"
        className="rounded-none bg-white px-1 flex items-center justify-center h-6 whitespace-nowrap"
      >
        Page {currentPage} of {totalPages}
        <span className="hidden md:inline-block">
          &nbsp;• {filteredCompanies.length}
        </span>
        <div className="ml-2 inline-flex items-center justify-center gap-1">
          <Link
            href={createPageUrl(1)}
            className={cn(
              "hover:text-foreground flex items-center justify-center",
              isPreviousDisabled && "pointer-events-none text-muted-foreground",
            )}
          >
            <ChevronsLeft className="inline" size={18} />
          </Link>
          <Link
            href={createPageUrl(currentPage - 1)}
            className={cn(
              "hover:text-foreground flex items-center justify-center",
              isPreviousDisabled && "pointer-events-none text-muted-foreground",
            )}
          >
            <ChevronLeft className="inline" size={18} />
          </Link>
          <Link
            href={createPageUrl(currentPage + 1)}
            className={cn(
              "hover:text-foreground flex items-center justify-center",
              isNextDisabled && "pointer-events-none text-muted-foreground",
            )}
          >
            <ChevronRight className="inline" size={18} />
          </Link>
          <Link
            href={createPageUrl(totalPages)}
            className={cn(
              "hover:text-foreground flex items-center justify-center",
              isNextDisabled && "pointer-events-none text-muted-foreground",
            )}
          >
            <ChevronsRight className="inline" size={18} />
          </Link>
        </div>
      </Badge>
    </>
  );
};
