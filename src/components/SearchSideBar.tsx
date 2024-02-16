"use client";

import { ListFilter } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

import { Badge } from "./ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

type SearchSideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
};

export function SearchSideBar({
  locationOptions,
  categoryOptions,
}: SearchSideBarProps) {
  const searchParams = useSearchParams();

  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const location = searchParams.get("location");

  const router = useRouter();
  const pathname = usePathname();

  const filtersNumber = [query, category, location].filter(Boolean).length;

  const handleSearchTerm = useDebouncedCallback((term) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (term) {
      params.set("query", term.trim());
    } else {
      params.delete("query");
    }

    router.replace(`${pathname}?${params.toString()}`);
  }, 250);

  const handleCategoryChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (value === "all" || !value) {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  const handleLocationChange = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (value === "all" || !value) {
      params.delete("location");
    } else {
      params.set("location", value);
    }
    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div>
      <div className="sticky top-0 h-fit pt-2">
        <aside className="mx-auto w-[96%] rounded-md border bg-background px-4 py-3 md:w-72">
          <div className="text-md mb-4 flex items-center justify-between font-medium">
            <div className="flex items-center gap-1">
              <ListFilter className="h-4 w-4" />
              Filters
              {filtersNumber > 0 && (
                <Badge className="rounded-full px-2" variant="secondary">
                  {filtersNumber}
                </Badge>
              )}
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="query">Search term</Label>
              <Input
                id="query"
                name="query"
                onChange={(e) => {
                  handleSearchTerm(e.target.value);
                }}
                placeholder="Name or description term"
                defaultValue={query || ""}
              />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="category">Category</Label>
              <Select
                defaultValue={category || "all"}
                onValueChange={handleCategoryChange}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All categories</SelectItem>
                  {categoryOptions.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="location">Location</Label>
              <Select
                defaultValue={location || "all"}
                onValueChange={handleLocationChange}
              >
                <SelectTrigger id="location" className="w-full">
                  <SelectValue placeholder="Select a location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All locations</SelectItem>
                  {locationOptions.map((location) => (
                    <SelectItem key={location} value={location}>
                      {location}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
