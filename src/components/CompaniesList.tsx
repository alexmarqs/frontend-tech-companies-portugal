"use client";

import { Company } from "@/lib/types";
import { matchCompanies } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Clock } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import CompaniesListPagination from "./CompaniesListPagination";
import CompanyItem from "./CompanyItem";
import { EmptyState } from "./EmptyState";
import FeaturedSideSection from "./FeaturedSideSection";

const PAGE_SIZE = 15;

export default function CompaniesList({
  allCompanies,
  updatedAtISODate,
}: {
  allCompanies: Company[];
  updatedAtISODate: string;
}) {
  const searchParams = useSearchParams();

  const query = searchParams.get("query") || "";
  const category = searchParams.get("category") || "";
  const location = searchParams.get("location") || "";
  const currentPage = Number(searchParams.get("page")) || 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const filteredCompanies = useMemo(
    () =>
      allCompanies.filter((company) =>
        matchCompanies(company, query, category, location),
      ),
    [allCompanies, query, category, location],
  );

  const paginatedCompanies = filteredCompanies.slice(start, end);
  const totalPages = Math.ceil(filteredCompanies.length / PAGE_SIZE);

  return (
    <>
      {!paginatedCompanies.length ? (
        <div className="flex-1 font-mono">
          <EmptyState
            className=""
            title="No companies found"
            description="We couldn't find any companies matching your search."
          />
        </div>
      ) : (
        <div className="flex-1 font-mono">
          <div className="mb-2 text-xs w-full flex flex-wrap items-center justify-between gap-2 text-muted-foreground">
            <div className="flex items-center gap-1">
              <Clock size={14} />
              Last sync: {formatDistanceToNow(new Date(updatedAtISODate))} ago
            </div>
            <div>
              Page {currentPage} of {totalPages}
              <span className="hidden md:inline-block">
                &nbsp;• {filteredCompanies.length}
              </span>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            {paginatedCompanies.map((company) => (
              <CompanyItem company={company} key={company.slug} />
            ))}
            <CompaniesListPagination
              currentPage={currentPage}
              totalPages={totalPages}
              searchParams={searchParams}
            />
          </div>
        </div>
      )}
      <div className="block md:hidden">
        <FeaturedSideSection />
      </div>
    </>
  );
}
