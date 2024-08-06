import Image from "next/image";
import hero from "@/public/Hero.webp";

export default function AboutHeader() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <Image
        src={hero}
        alt="Hero Image"
        fill
        className="object-cover opacity-90 -z-10 brightness-50"
        priority
        quality={75}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4 lg:p-8">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16 flex flex-col md:items-center gap-6 text-stone-100">
          <h1 className="lg:max-w-3xl font-bold md:text-center leading-tight animate-fade-in">
            About NusaBean Coffee
          </h1>
          <div className="max-w-xl lg:max-w-3xl text-base md:text-lg md:mt-4">
            <p className="animate-fade-in">
              We are Filbert and Richard from Semarang City. Since 2021, we have
              been exporting Indonesian commodities such as recycled plastics
              and charcoal briquettes to several countries. During our recent
              trip to Temanggung Regency, just a two-hour drive from our home,
              we discovered the exceptional quality of the local coffee. We were
              impressed not only by the superior quality of the coffee beans but
              also by the advanced post-harvest processing techniques, such as
              natural, dry, and wine processes, employed by the coffee growers.
              Inspired by this discovery, we decided to introduce these
              high-quality products to the global audience, so more people can
              enjoy the unique flavors of Indonesian coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
