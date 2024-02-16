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
    <Suspense>
      <SearchSideBar
        locationOptions={locationOptions}
        categoryOptions={categoryOptions}
      />
    </Suspense>
  );
}
