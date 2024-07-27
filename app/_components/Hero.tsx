import Image from "next/image";
import hero from "@/public/Hero.webp";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-60px)] flex items-center justify-center">
      <Image
        src={hero}
        alt="Hero Image"
        fill
        className="object-cover opacity-90 -z-10 brightness-50"
        priority
      />
      <div className="absolute inset-0 flex items-center justify-center p-8 bg-black bg-opacity-50">
        <div className="wrapper py-16 grid grid-cols-1 md:grid-cols-2 gap-4 text-stone-100">
          <div className="flex flex-col justify-between gap-4">
            <h1>We are NusaBean Coffee</h1>
            <h2>Discover the Essence of Indonesian Coffee</h2>
            <a href="" className="p-4 text-center bg-green-700 rounded-xl">
              Get started!
            </a>
          </div>
          <div>
            <p className="text-base md:text-lg">
              At NusaBean Coffee, we are dedicated to working hand-in-hand with
              local farmers to bring you the finest Indonesian green coffee
              beans. The skilled farmers of Indonesia excel in cultivating
              high-quality coffee, yet often face challenges in receiving fair
              prices for their exceptional harvests. We are passionate about
              supporting these hardworking farmers, ensuring they are justly
              compensated for their labor and dedication. Our mission is to
              share the remarkable quality of Indonesian coffee beans with the
              world, allowing more people to experience the unique flavors and
              rich heritage of our coffee.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
