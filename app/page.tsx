import ContactInfo from "./_components/ContactInfo";
import Hero from "./_components/Hero";
import Product from "./_components/Product";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Product />
      <ContactInfo />
    </main>
  );
}
