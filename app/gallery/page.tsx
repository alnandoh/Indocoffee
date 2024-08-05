import React from "react";
import Gallery from "./_components/Gallery";
import PageHeader from "@/components/PageHeader";
import hero from "@/public/Hero.webp";

export default function page() {
  return (
    <div className="min-h-screen ">
      <PageHeader img={hero} title={"Our Gallery"} />
      <main className="p-6">
        <Gallery />
      </main>
    </div>
  );
}
