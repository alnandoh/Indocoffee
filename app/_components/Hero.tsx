import Image from "next/image";
import hero from "@/public/Hero.webp";

export default function Hero() {
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
          <h1 className="font-bold md:text-center leading-tight animate-fade-in">
            NusaBean Coffee
          </h1>
          <div className="flex flex-col md:items-center gap-6 lg:items-start lg:flex-row lg:gap-12 lg:justify-between">
            <div className="flex flex-col gap-4 max-w-xl lg:max-w-lg">
              <h2 className="animate-fade-in">
                Discover the Finest <br /> Essence of Indonesian Coffee
              </h2>
              <a
                href="#"
                className="p-2 md:p-4 text-center bg-one-800 text-white rounded-xl shadow-lg hover:bg-one-700 transition duration-300"
              >
                Get Started!
              </a>
            </div>
            <div className="max-w-xl lg:max-w-lg text-base md:text-lg">
              <p className="animate-fade-in">
                At NusaBean Coffee, we are dedicated to working hand-in-hand
                with local farmers to bring you the finest Indonesian green
                coffee beans. The skilled farmers of Indonesia excel in
                cultivating high-quality coffee, yet often face challenges in
                receiving fair prices for their exceptional harvests. We are
                passionate about supporting these hardworking farmers, ensuring
                they are justly compensated for their labor and dedication. Our
                mission is to share the remarkable quality of Indonesian coffee
                beans with the world, allowing more people to experience the
                unique flavors and rich heritage of our coffee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
