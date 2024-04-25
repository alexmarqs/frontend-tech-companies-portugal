import FeaturedSideSection from "./FeaturedSideSection";
import { SearchSideBar } from "./SearchSideBar";

type SideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
};

export function SideBar({ locationOptions, categoryOptions }: SideBarProps) {
  return (
    <aside className="flex h-fit shrink-0 flex-col gap-4 pt-1 md:sticky md:top-0 md:flex-col-reverse">
      <FeaturedSideSection />
      <SearchSideBar {...{ locationOptions, categoryOptions }} />
    </aside>
  );
}
