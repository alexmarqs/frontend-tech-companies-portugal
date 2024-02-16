"use server";

import { unstable_cache as cache } from "next/cache";
import { parseCompaniesData } from "../parser";

export const getParsedCompaniesData = cache(
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
    revalidate: 21600, // 6 hours
    tags: ["companies"],
  },
);
