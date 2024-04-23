"use client";

import CompaniesList from "@/components/CompaniesList";
import { SideBar } from "@/components/SideBar";

export default function CompaniesClientPage({
  companies,
  availableCategories,
  availableLocations,
  updatedAtISODate,
}: any) {
  return (
    <section className="relative mt-4 flex flex-1 flex-col gap-6 md:flex-row">
      <SideBar
        categoryOptions={availableCategories}
        locationOptions={availableLocations}
      />
      <CompaniesList
        allCompanies={companies}
        updatedAtISODate={updatedAtISODate}
      />
    </section>
  );
}
