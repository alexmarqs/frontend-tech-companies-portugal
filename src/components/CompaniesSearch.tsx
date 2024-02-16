import { Suspense } from "react";
import { SearchSideBar } from "./SearchSideBar";

type CompaniesSearchProps = {
  locationOptions: string[];
  categoryOptions: string[];
};

export default function CompaniesSearch({
  locationOptions,
  categoryOptions,
}: CompaniesSearchProps) {
  return (
    <Suspense
      fallback={<div className="h-10 w-full bg-muted-foreground"></div>}
    >
      <SearchSideBar
        locationOptions={locationOptions}
        categoryOptions={categoryOptions}
      />
    </Suspense>
  );
}
