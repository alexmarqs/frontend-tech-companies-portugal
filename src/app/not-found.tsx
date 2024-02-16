import { EmptyState } from "@/components/EmptyState";

export default function NotFound() {
  return (
    <EmptyState
      title="Page Not Found"
      description="The page you are looking for does not exist."
    />
  );
}
