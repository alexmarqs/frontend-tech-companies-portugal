import { parseCompaniesData } from "../parser";

export const getParsedCompaniesData = async () => {
  const data = await parseCompaniesData();
  const updatedAtISODate = new Date().toISOString();

  return {
    companies: data.companies,
    availableLocations: data.availableLocations,
    availableCategories: data.availableCategories,
    updatedAtISODate,
  };
};

export const getParsedCompanyBySlug = async (slug: string) => {
  const { companies } = await getParsedCompaniesData();

  return companies.find((company) => company.slug === slug);
};
