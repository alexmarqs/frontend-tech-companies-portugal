import { ReadonlyURLSearchParams } from "next/navigation";
import { useCallback } from "react";

interface UsePaginationUtilsProps {
  currentPage: number;
  totalPages: number;
  searchParams?: ReadonlyURLSearchParams;
}

export function usePaginationUtils({
  currentPage,
  totalPages,
  searchParams,
}: UsePaginationUtilsProps) {
  const isPreviousDisabled = currentPage === 1;
  const isNextDisabled = currentPage === totalPages;

  const createPageUrl = useCallback(
    (page: number) => {
      const currentUrlSearchParams = new URLSearchParams(searchParams);

      if (page === 1) {
        // Remove the page query param if it's the first page
        currentUrlSearchParams.delete("page");
      } else {
        currentUrlSearchParams.set("page", String(page));
      }

      return `/?${currentUrlSearchParams.toString()}`;
    },
    [searchParams],
  );

  return {
    isPreviousDisabled,
    isNextDisabled,
    createPageUrl,
  };
}
