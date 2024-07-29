import Image from "next/image";
import ProductTable from "./_components/ProductTable";
import hero from "@/public/Hero.webp";

export default function page() {
  return (
    <div className="min-h-screen">
      <section className="h-[35vh] relative bg-black/50">
        <Image
          src={hero}
          alt="Coffee Beans"
          fill
          className="object-cover -z-10"
        />
        <div className="wrapper h-full flex justify-center items-center">
          <h1 className="text-white">Our Coffee</h1>
        </div>
      </section>

      <section className="py-8">
        <ProductTable />
      </section>
    </div>
  );
}
