import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-300 text-stone-900">
      <div className="wrapper py-4 lg:py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-between">
        <div className="flex flex-col gap-4 md:col-span-2">
          <Link href="/" className="self-center lg:self-start">
            Logo
          </Link>
          <p className="text-sm lg:text-base">
            NusaBean is a coffee producer, trader, and exporter based in
            Semarang, Central Java, Indonesia. We support Indonesian coffee
            farmers to live well by directly buy the coffee from them, and to
            produce the highest quality of Indonesian coffee bean for local and
            international market.
          </p>
        </div>
        <div className="flex flex-col">
          <p className="font-bold text-lg">Quick Link</p>
        </div>
        <div className="space-y-4">
          <p className="font-bold lg:ml-8 text-lg">Contact Us</p>
          <div className="flex gap-2 items-center">
            <MapPin className="w-6 h-6 text-red-700" />
            <p>
              Jl. Jend Sudirman no. 1 <br />
              Semarang, Jawa Tengah, <br />
              Indonesia 50242
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <Phone className="w-6 h-6" />
            <p>+62 812 3456 7890</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <p className="font-medium">©2024 Indo Coffee</p>
      </div>
    </footer>
  );
}
