import { unstable_cache as cache } from "next/cache";
import { cache as dedup } from "react";
import { parseCompaniesData } from "../parser";

export const getParsedCompaniesData = dedup(
  cache(
    async () => {
      const data = await parseCompaniesData();
      const updatedAtISODate = new Date().toISOString();

      return {
        companies: data.companies,
        availableLocations: data.availableLocations,
        availableCategories: data.availableCategories,
        updatedAtISODate,
      };
    },
    ["companies"],
    {
      tags: ["companies"],
      revalidate: 60 * 60 * 6, // 6 hours
    },
  ),
);

export const getParsedCompanyBySlug = async (slug: string) => {
  const { companies } = await getParsedCompaniesData();

  return companies.find((company) => company.slug === slug);
};
