import Image from "next/image";
import HeritageImage from "@/public/Heritage Image.webp";
export default function Heritage() {
  return (
    <section className="bg-two-500 text-one-800">
      <div className="wrapper py-12 md:py-16 lg:py-24 xl:py-28">
        <h2 className="lg:max-w-5xl mx-auto font-bold text-center leading-tight animate-fade-in mb-8 lg:mb-12">
          The Rich Heritage of Indonesian Coffee
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="w-full aspect-video md:h-92 lg:h-full relative rounded-xl overflow-hidden">
            <Image
              src={HeritageImage}
              alt="Heritage Image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              className="animate-fade-in"
            />
          </div>
          <p className="xl:text-lg text-justify animate-fade-in">
            Indonesia is a leading agricultural producer, with coffee
            exemplifying its exceptional quality. Located along the Pacific
            "Ring of Fire," Indonesia&apos;s 128 volcanoes enrich the soil,
            creating ideal coffee-growing conditions. The country's diverse
            climates, from cool highlands to humid tropics, contribute unique
            flavors to its coffee. <br /> <br />
            The history of Indonesian coffee dates back to the 18th century when
            the Dutch East India Company (VOC) first cultivated coffee on
            Java&apos;s volcanic slopes. Renowned for its quality and
            distinctive flavor, Indonesian coffee quickly gained international
            acclaim. We continue this legacy with premium green coffee beans
            that embody Indonesia&apos;s rich heritage and unique taste.
          </p>
        </div>
      </div>
    </section>
  );
}
