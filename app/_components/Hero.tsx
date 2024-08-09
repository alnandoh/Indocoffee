import Image from "next/image";
import hero from "@/public/HeroImage.webp";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-80px)] sm:min-h-screen flex items-center justify-center">
      <Image
        src={hero}
        alt="Hero Image"
        fill
        className="object-cover opacity-90 -z-10 brightness-50"
        priority
        quality={75}
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black/50 p-4 lg:p-8">
        <div className="mx-auto p-4 lg:px-8 lg:py-16 flex flex-col md:items-center gap-6 text-stone-100">
          <h1 className="lg:max-w-3xl font-bold md:text-center leading-tight animate-fade-in">
            Discover the Essence <br />
            of Indonesian Coffee
          </h1>
          <div className="max-w-xl lg:max-w-3xl text-base md:text-lg md:mt-4">
            <p className="text-justify animate-fade-in">
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
