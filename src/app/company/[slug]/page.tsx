export default function CompanyPage({ params }: { params: { slug: string } }) {
  return <div>Company: {params.slug}</div>;
}
