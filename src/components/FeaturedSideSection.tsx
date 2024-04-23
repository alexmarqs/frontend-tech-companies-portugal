import { Button } from "./ui/button";

export default function FeaturedSideSection() {
  return (
    <div className="rounded-md border-2 bg-gray-50 px-4 py-3 md:w-72">
      <div className="space-y-3 text-center">
        <h2 className="text-lg font-semibold"> Get Featured 🔥</h2>
        <p className="text-sm tracking-wide text-gray-500">
          Reach me out to get your company featured on our platform.
        </p>
      </div>
      <Button
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
    </div>
  );
}
