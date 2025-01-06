import FeaturedSideSection from "./FeaturedSideSection";
import { SearchSideBar } from "./SearchSideBar";

type SideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
};

export function SideBar({ locationOptions, categoryOptions }: SideBarProps) {
  return (
    <aside className="h-fit shrink-0 flex-col gap-4 md:sticky md:top-[60px] md:flex-col-reverse hidden md:flex">
      <FeaturedSideSection />
      <SearchSideBar {...{ locationOptions, categoryOptions }} />
    </aside>
  );
}
