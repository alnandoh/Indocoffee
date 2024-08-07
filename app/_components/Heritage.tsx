import Image from "next/image";
export default function Heritage() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center bg-two-500 p-4 lg:p-8">
        <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-16 flex flex-col md:items-center gap-6 text-one-800">
          <h2 className="lg:max-w-3xl font-bold md:text-center leading-tight animate-fade-in">
            The Rich Heritage of Indonesian Coffee
          </h2>
          <div className="max-w-xl lg:max-w-3xl text-base md:text-lg md:mt-4">
            <p className="animate-fade-in text-justify">
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
