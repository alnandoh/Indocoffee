import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@/public/NusaBean Logo - Normal.svg";

export default function Footer() {
  return (
    <footer className="bg-one-800 text-three">
      <div className="wrapper py-4 md:py-8 lg:py-10 grid grid-cols-1 md:grid-cols-2  gap-6 justify-between">
        <div className="flex flex-col gap-4">
          <Link href="/" className="self-center lg:self-start">
            <div className="relative w-32 h-20">
              <Image
                src={FooterLogo}
                alt="Nusa Bean Logo"
                className="object-contain"
                fill
              />
            </div>
          </Link>
          <p className="text-sm">
            NusaBean Coffee supplies premium Indonesian green coffee beans,
            supporting fair pricing and preserving heritage.
          </p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-center md:text-left lg:ml-10 text-lg ">
            Contact Us
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <MapPin className="min-w-6 h-6 text-red-700" />
              <p className="text-sm">
                Jl. Brotojoyo No.4D 22, Kota Semarang, Jawa Tengah, Indonesia
                50171
              </p>
            </div>
            <div className="flex gap-4 items-center">
              <Phone className="w-6 h-6 text-two-100" />
              <p>+62 852-3222-6993</p>
            </div>
            <div className="flex gap-4 items-center">
              <Mail className="w-6 h-6 text-two-500" />
              <p>nusabean.coffee@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-1 border-two-500 border-t">
        <p className="font-medium">©2024 Indo Coffee</p>
      </div>
    </footer>
  );
}
