import Image from "next/image";
import hero from "@/public/Hero1.webp";

export default function Product() {
  return (
    <section className="wrapper py-16 min-h-screen flex flex-col gap-8 justify-center bg-zinc-500">
      <h2 className="text-center text-3xl font-bold animate-fade-in">
        Our Green Coffee Beans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center animate-fade-in">
        <div className="order-1 md:order-1 relative rounded-lg lg:rounded-xl overflow-hidden">
          <Image
            src={hero}
            alt="Java Temanggung Arabica Coffee Beans"
            className="object-contain"
          />
        </div>
        <div className="order-2 md:order-2 space-y-2 lg:space-y-4">
          <h3 className="text-xl font-semibold animate-fade-in">
            Java Temanggung Arabica Green Coffee Beans
          </h3>
          <p>
            Temanggung Regency, located in Central Java Province, is renowned as
            one of the largest producers of tobacco and coffee beans. The
            Arabica coffee plantations in Temanggung are particularly unique due
            to their intercropping with tobacco plants. This distinctive
            cultivation method imparts a subtle tobacco aftertaste to the
            coffee, creating a flavor profile that is truly one-of-a-kind.
            Additionally, the Arabica plantations are nestled in the fertile
            highlands of Mount Sindoro and Mount Sumbing, which provide the
            perfect environment for growing exceptional coffee. Our Java
            Temanggung Arabica Green Coffee Beans offer a rich and complex
            taste, making them a perfect choice for coffee connoisseurs seeking
            a unique experience.
          </p>
        </div>
        <div className="order-3 md:order-4 relative rounded-lg lg:rounded-xl overflow-hidden">
          <Image
            src={hero}
            alt="Java Temanggung Robusta Coffee Beans"
            className="object-cover transition duration-300 ease-in hover:scale-105"
          />
        </div>
        <div className="order-4 md:order-3 space-y-2 lg:space-y-4">
          <h3 className="text-xl font-semibold animate-fade-in">
            Java Temanggung Robusta Green Coffee Beans
          </h3>
          <p>
            Temanggung Regency is home to some of the finest Robusta coffee,
            cultivated organically to ensure the highest quality. Our Java
            Temanggung Robusta Green Coffee Beans are celebrated for their
            strong aroma and rich flavors, featuring notes of chocolate, brown
            sugar, and spice. The skilled farmers in this region excel in
            post-harvest processing techniques, producing not only the common
            dry process Robusta but also unique and rare variants such as
            natural, honey, and wine-processed coffees. This dedication to
            excellence results in a robust and flavorful coffee that stands out
            in the market.
          </p>
        </div>
      </div>
    </section>
  );
}
