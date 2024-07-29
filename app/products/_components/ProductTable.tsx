import Image from "next/image";
import hero from "@/public/Hero.webp";

export default function ProductTable() {
  return (
    <div className="wrapper py-8 min-h-screen flex flex-col gap-8 border items-center rounded-xl border-black">
      <h3 className="border-b border-black">General Specifications</h3>
      <div className="w-full flex flex-col gap-4">
        <div className="grid grid-cols-[1fr,1.5fr] gap-4">
          <div className="rounded-xl overflow-hidden">
            <Image src={hero} alt="Java Temanggung Robusta Coffee Beans" />
          </div>
          <div className="flex flex-col gap-4 text-lg">
            <p>Product name: Java Temanggung Robusta Beans</p>
            <p>Flavor note: Floral, Fruity</p>
            <p>Origin: Temanggung, Indonesia</p>
            <p>Price per kg: Rp. 100.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}
