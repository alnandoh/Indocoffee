import Image from "next/image";
import Mountain from "@/public/posong.webp";
export default function Heritage() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] sm:h-screen flex items-center justify-center">
      <Image
        src={Mountain}
        alt="Hero Image"
        fill
        className="object-cover opacity-90 -z-10 brightness-50"
        priority
        quality={75}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4 lg:p-8">
        <div className="mx-auto p-4 lg:px-8 lg:py-16 flex flex-col md:items-center gap-6 text-stone-100">
          <h2 className="lg:max-w-3xl font-bold md:text-center leading-tight animate-fade-in">
            The Rich Heritage of Indonesian Coffee
          </h2>
          <div className="max-w-xl lg:max-w-3xl text-base md:text-lg md:mt-4">
            <p className="xl:text-lg text-justify animate-fade-in">
              Indonesia is a leading agricultural producer, with coffee
              exemplifying its exceptional quality. Located along the Pacific
              "Ring of Fire," Indonesia&apos;s 128 volcanoes enrich the soil,
              creating ideal coffee-growing conditions. The country's diverse
              climates, from cool highlands to humid tropics, contribute unique
              flavors to its coffee. <br /> <br />
              The history of Indonesian coffee dates back to the 18th century
              when the Dutch East India Company (VOC) first cultivated coffee on
              Java&apos;s volcanic slopes. Renowned for its quality and
              distinctive flavor, Indonesian coffee quickly gained international
              acclaim. We continue this legacy with premium green coffee beans
              that embody Indonesia&apos;s rich heritage and unique taste.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
