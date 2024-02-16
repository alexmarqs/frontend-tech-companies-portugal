import CompaniesList from "@/components/CompaniesList";
import CompaniesSearch from "@/components/CompaniesSearch";
import { getParsedCompaniesData } from "@/lib/actions/companies";

import { SearchParams } from "@/lib/types";

export default async function CompaniesPage({
  searchParams,
}: {
  searchParams?: SearchParams;
}) {
  const {
    companies,
    updatedAtISODate,
    availableCategories,
    availableLocations,
  } = await getParsedCompaniesData();

  return (
    <>
      <CompaniesSearch
        locationOptions={availableLocations}
        categoryOptions={availableCategories}
      />
      <CompaniesList
        searchParams={searchParams}
        allCompanies={companies}
        updatedAtISODate={updatedAtISODate}
      />
    </>
  );
}
