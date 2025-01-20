import { EmptyState } from "@/components/EmptyState";

export default function NotFound() {
  return (
    <EmptyState
      title="Company Not Found"
      description="The company you are looking for does not exist."
    />
  );
}
