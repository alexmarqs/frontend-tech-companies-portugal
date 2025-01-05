import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export const useSearchFiltersParams = () => {
  const searchParams = useSearchParams();

  const filters = useMemo(
    () => ({
      query: searchParams.get("query"),
      category: searchParams.get("category"),
      location: searchParams.get("location"),
    }),
    [searchParams],
  );

  const appliedFilters = Object.entries(filters).filter(
    ([_key, value]) => value !== null,
  );

  return {
    searchParams,
    filters,
    appliedFilters,
  };
};
