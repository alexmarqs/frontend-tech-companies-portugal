import { Company, SearchParams } from "@/lib/types";
import { formatDistanceToNow } from "date-fns";
import { Clock } from "lucide-react";
import CompanyItem from "./CompanyItem";
import { NoCompaniesResults } from "./NoCompaniesResults";
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

  return (
    <>
      {!paginatedCompanies.length ? (
        <NoCompaniesResults />
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
          </div>
        </div>
      )}
    </>
  );
}

const matchCompanies = (
  company: Company,
  query: string,
  category: string,
  location: string,
) => {
  const searchTerm = `${company.name} ${company.description}`.toLowerCase();
  return (
    (!query || searchTerm.includes(query.toLowerCase())) &&
    (!category || Array.isArray(company?.categories)
      ? company.categories.includes(category)
      : company.categories === category) &&
    (!location || company?.locations?.includes(location))
  );
};
