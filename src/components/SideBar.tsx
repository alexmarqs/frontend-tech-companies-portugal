import FeaturedSideSection from "./FeaturedSideSection";
import { SearchSideBar } from "./SearchSideBar";

type SideBarProps = {
  locationOptions: string[];
  categoryOptions: string[];
};

export function SideBar({ locationOptions, categoryOptions }: SideBarProps) {
  return (
    <aside className="flex h-fit shrink-0 flex-col gap-4 md:sticky md:top-[60px] md:flex-col-reverse">
      <div className="hidden md:block">
        <FeaturedSideSection />
      </div>
      <SearchSideBar {...{ locationOptions, categoryOptions }} />
    </aside>
  );
}
