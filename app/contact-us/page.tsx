import PageHeader from "@/components/PageHeader";
import hero from "@/public/Hero.webp";

export default function page() {
  return (
    <div className="min-h-screen">
      <PageHeader img={hero} title={"Contact Us"} />
    </div>
  );
}
