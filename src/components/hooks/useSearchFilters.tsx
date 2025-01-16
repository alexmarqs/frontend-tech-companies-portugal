import { useEffect, useState } from "react";

import { useCallback } from "react";
import { useDebouncedCallback } from "use-debounce";
export type SearchFilters = {
  query: string | null;
  category: string | null;
  location: string | null;
};

export type UseSearchFiltersOptions = {
  initialFilters?: SearchFilters;
  onFiltersChange?: (filters: SearchFilters) => void;
};

export function useSearchFilters({
  initialFilters,
  onFiltersChange,
}: UseSearchFiltersOptions) {
  const [filters, setFilters] = useState<SearchFilters>({
    query: initialFilters?.query || null,
    category: initialFilters?.category || null,
    location: initialFilters?.location || null,
  });

  useEffect(() => {
    if (initialFilters) {
      setFilters(initialFilters);
    }
  }, [initialFilters]);

  const debouncedOnFiltersChange = useDebouncedCallback(
    (newFilters: SearchFilters) => {
      onFiltersChange?.(newFilters);
    },
    200,
  );

  const handleSearchTerm = useCallback(
    (term: string) => {
      const newFilters = {
        ...filters,
        query: term || null,
      };
      setFilters(newFilters);
      debouncedOnFiltersChange(newFilters);
    },
    [filters, debouncedOnFiltersChange],
  );

  const handleCategoryChange = useCallback(
    (value: string) => {
      const newFilters = {
        ...filters,
        category: value !== "all" ? value : null,
      };
      setFilters(newFilters);
      onFiltersChange?.(newFilters);
    },
    [filters, onFiltersChange],
  );

  const handleLocationChange = useCallback(
    (value: string) => {
      const newFilters = {
        ...filters,
        location: value !== "all" ? value : null,
      };
      setFilters(newFilters);
      onFiltersChange?.(newFilters);
    },
    [filters, onFiltersChange],
  );

  const handleResetFilters = useCallback(() => {
    const newFilters = {
      query: null,
      category: null,
      location: null,
    };
    setFilters(newFilters);
    onFiltersChange?.(newFilters);
  }, [onFiltersChange]);

  const filtersNumber = Object.values(filters).filter(Boolean).length;

  return {
    filters,
    filtersNumber,
    handleSearchTerm,
    handleCategoryChange,
    handleLocationChange,
    handleResetFilters,
    setFilters,
  };
}
