import { useSearchParams } from "next/navigation";

export const useSearchFiltersParams = () => {
  const searchParams = useSearchParams();

  const filters = {
    query: searchParams.get("query"),
    category: searchParams.get("category"),
    location: searchParams.get("location"),
  };

  const appliedFilters = Object.entries(filters).filter(
    ([_key, value]) => value !== null,
  );

  return {
    searchParams,
    filters,
    appliedFilters,
  };
};
