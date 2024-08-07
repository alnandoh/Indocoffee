import Image from "next/image";
import Owner from "@/public/Owner Photo.webp";

export default function About() {
  return (
    <section className="bg-one-800 text-stone-100">
      <div className="wrapper py-12 md:py-16 lg:py-24 xl:py-28">
        <h2 className="lg:max-w-3xl mx-auto font-bold text-center leading-tight animate-fade-in mb-8 lg:mb-12">
          About NusaBean Coffee
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-justify animate-fade-in">
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
          <div className="order-1 lg:order-2 w-full aspect-video md:h-92 lg:aspect-auto lg:h-full relative rounded-xl overflow-hidden">
            <Image
              src={Owner}
              alt="Owner Photo"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="animate-fade-in"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
