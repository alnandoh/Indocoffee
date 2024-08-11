import About from "./_components/About";
import Heritage from "./_components/Heritage";
import Hero from "./_components/Hero";
import Product from "./_components/Product";
import Video from "./_components/Video";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <About />
      <Video />
      <Heritage />
      <Product />
    </main>
  );
}
