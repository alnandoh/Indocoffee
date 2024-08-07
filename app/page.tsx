import About from "./_components/About";
import ContactInfo from "./_components/ContactInfo";
import Heritage from "./_components/Heritage";
import Hero from "./_components/Hero";
import Product from "./_components/Product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Heritage />
      <Product />
      <ContactInfo />
    </main>
  );
}
