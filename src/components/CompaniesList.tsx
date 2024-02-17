import { Company, SearchParams } from "@/lib/types";
import { matchCompanies } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";
import { Clock } from "lucide-react";
import CompaniesListPagination from "./CompaniesListPagination";
import CompanyItem from "./CompanyItem";
import { EmptyState } from "./EmptyState";
import { Badge } from "./ui/badge";

const PAGE_SIZE = 10;

export default function CompaniesList({
  searchParams,
  allCompanies,
  updatedAtISODate,
}: {
  searchParams?: SearchParams;
  allCompanies: Company[];
  updatedAtISODate: string;
}) {
  const query = searchParams?.query || "";
  const category = searchParams?.category || "";
  const location = searchParams?.location || "";
  const currentPage = Number(searchParams?.page) || 1;

  const start = (currentPage - 1) * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const filteredCompanies = allCompanies.filter((company) =>
    matchCompanies(company, query, category, location),
  );

  const paginatedCompanies = filteredCompanies.slice(start, end);
  const totalPages = Math.ceil(filteredCompanies.length / PAGE_SIZE);

  return (
    <>
      {!paginatedCompanies.length ? (
        <EmptyState
          className="h-full w-full md:flex-none"
          title="No companies found"
          description="We couldn't find any companies matching your search."
        />
      ) : (
        <div className="flex-1">
          <div className="mb-1 flex items-center justify-between text-sm text-muted-foreground ">
            <Badge variant="secondary" className="flex items-center gap-1 px-1">
              <Clock size={16} />
              Updated {formatDistanceToNow(new Date(updatedAtISODate))} ago.
            </Badge>
            {filteredCompanies.length} companies found.
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
    </>
  );
}
