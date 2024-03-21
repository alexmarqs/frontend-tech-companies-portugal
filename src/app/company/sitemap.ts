import { getParsedCompaniesData } from "@/lib/actions/companies";
import { APP_URL } from "@/lib/metadata";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const { companies, updatedAtISODate } = await getParsedCompaniesData();

  let companiesRoutes = companies.map((company) => ({
    url: `${APP_URL}/company/${company.slug}`,
    lastModified: updatedAtISODate,
  }));

  return [...companiesRoutes];
}
