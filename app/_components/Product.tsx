import Image from "next/image";
import Arabica from "@/public/Arabika - Natural.webp";
import Robusta from "@/public/Robusta G1.webp";
import Link from "next/link";

export default function Product() {
  return (
    <section className="wrapper py-16 min-h-screen flex flex-col gap-8 justify-center">
      <h2 className="text-center animate-fade-in text-3xl font-bold">
        Our Green Coffee Beans
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center animate-fade-in">
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg lg:rounded-xl overflow-hidden">
          <Image
            src={Arabica}
            alt="Java Temanggung Arabica Coffee Beans"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Java Temanggung Arabica Green Coffee Beans
          </h3>
          <p className="text-justify text-gray-700">
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
          <Link href="/products#Arabica" passHref>
            <div className="p-4 mt-4 rounded-xl text-center text-white bg-one-800 hover:bg-one-800/90 cursor-pointer transform duration-300">
              Check our product
            </div>
          </Link>
        </div>
        <div className="relative w-full h-64 md:h-80 lg:h-96 rounded-lg lg:rounded-xl overflow-hidden">
          <Image
            src={Robusta}
            alt="Java Temanggung Robusta Coffee Beans"
            className="transition-transform duration-300 ease-in-out hover:scale-105"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">
            Java Temanggung Robusta Green Coffee Beans
          </h3>
          <p className="text-justify text-gray-700">
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
          <Link href="/products#Robusta" passHref>
            <div className="p-4 mt-4 rounded-xl text-center text-white bg-one-800 hover:bg-one-800/90 cursor-pointer transform duration-300">
              Check our product
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
