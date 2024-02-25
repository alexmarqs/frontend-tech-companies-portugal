import { getParsedCompaniesData } from "@/lib/actions/companies";
import CompaniesClientPage from "./CompaniesClientPage";

export default async function CompaniesPage() {
  const {
    availableCategories,
    availableLocations,
    companies,
    updatedAtISODate,
  } = await getParsedCompaniesData();

  return (
    <CompaniesClientPage
      companies={companies}
      availableCategories={availableCategories}
      availableLocations={availableLocations}
      updatedAtISODate={updatedAtISODate}
    />
  );
}
