export const HotFeaturedBadge = () => {
  return (
    <span
      className="inline-flex items-center rounded-md bg-red-500/90 px-[2px] text-xs font-sans font-bold text-white shadow-sm"
      aria-label="Hot feature badge"
    >
      HOT{" "}
      <span className="ml-1" aria-hidden="true">
        🔥
      </span>
    </span>
  );
};
