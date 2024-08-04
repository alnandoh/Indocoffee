import React from "react";
import Gallery from "./_components/Gallery";

export default function page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white py-6">
        <h1 className="text-center text-3xl font-bold">Gallery</h1>
      </header>
      <main className="p-6">
        <Gallery />
      </main>
    </div>
  );
}
