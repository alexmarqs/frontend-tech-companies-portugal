import { Button } from "./ui/button";
import { RetroContainer } from "./ui/retro-container";

export default function FeaturedSideSection() {
  return (
    <RetroContainer variant="static" className="px-4 py-3 md:w-[330px]">
      <div className="space-y-3 text-center">
        <h2 className="text-lg font-semibold"> Get Featured 🔥</h2>
        <p className="text-sm tracking-wide text-gray-500">
          Reach me out to get your company featured.
        </p>
      </div>
      <Button
        variant="secondary"
        asChild
        className="mt-4 w-full bg-gradient-to-r from-green-400 to-red-500 hover:from-green-500 hover:to-red-600"
      >
        <a
          href="https://github.com/alexmarqs/frontend-tech-companies-portugal/issues/new"
          target="_blank"
          rel="noreferrer"
          className="text-white"
        >
          Request now
        </a>
      </Button>
    </RetroContainer>
  );
}
