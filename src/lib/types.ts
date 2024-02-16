export type Company = {
  slug: string;
  name: string;
  description: string;
  websiteUrl: string;
  careersUrl: string;
  githubUrl: string;
  categories: string[] | string;
  locations: string[];
};

export type LayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export type SearchParams = {
  query?: string;
  category?: string;
  location?: string;
  page?: string;
};
