import ProductTable from "./_components/ProductTable";
import hero from "@/public/Hero.webp";
import PageHeader from "@/components/PageHeader";

export default function page() {
  return (
    <div className="min-h-screen">
      <PageHeader img={hero} title={"Our Green Coffee Beans"} />

      <ProductTable />
    </div>
  );
}
