import {
  createLoader,
  createSearchParamsCache,
  parseAsFloat,
  parseAsString,
} from "nuqs/server";

// can be used in the client as well
export const searchParamsQueryStateKeys = {
  query: parseAsString.withDefault(""),
  category: parseAsString.withDefault(""),
  location: parseAsString.withDefault(""),
  page: parseAsFloat.withDefault(1),
};

// for server side
export const loadSearchParams = createLoader(searchParamsQueryStateKeys);

// For getting server side cached search params in nested components tree
export const searchParamsCache = createSearchParamsCache(
  searchParamsQueryStateKeys,
);
