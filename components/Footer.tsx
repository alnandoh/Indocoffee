import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "@/public/NusaBean Logo - Normal.svg";

export default function Footer() {
  return (
    <footer className="bg-one-800 text-white" id="contact-us">
      <div className="wrapper mx-auto py-8 px-4 md:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-center md:items-start">
            <Link href="/" className="mb-4">
              <div className="relative w-40 h-24">
                <Image
                  src={FooterLogo}
                  alt="Nusa Bean Logo"
                  className="object-contain"
                  fill
                />
              </div>
            </Link>
            <p className="text-justify md:text-left text-sm lg:text-base">
              NusaBean Coffee supplies premium Indonesian green coffee beans,
              supporting fair pricing and preserving heritage.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="min-w-6 h-6 text-red-500 mr-3" />
                <p className="text-sm lg:text-base">
                  Jl. Brotojoyo No.4D 22, Semarang,
                  <br />
                  Jawa Tengah, Indonesia 50171
                </p>
              </div>
              <div className="flex items-center">
                <Phone className="min-w-6 h-6 text-green-500 mr-3" />
                <p className="text-sm lg:text-base">
                  Whatsapp: +62 852-3222-6993
                </p>
              </div>
              <div className="flex items-center">
                <Mail className="min-w-6 h-6 text-slate-300 mr-3" />
                <p className="text-sm lg:text-base">
                  nusabean.coffee@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-60 md:col-span-2 xl:h-80 rounded-xl overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31682.3820074271!2d110.39271370742769!3d-6.97415470777513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f4b6d66b2df5%3A0xdabdca791c757a8c!2sJl.%20Brotojoyo%20No.4D%2022%2C%20RW.23%2C%20Plombokan%2C%20Kec.%20Semarang%20Utara%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050171!5e0!3m2!1sen!2sid!4v1722789082326!5m2!1sen!2sid"
            className="w-full h-full"
            title="Nusa Bean Coffee Google Map Location"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <div className="bg-one-700 py-4">
        <div className="container mx-auto text-center text-sm">
          <p className="text-two-100">
            ©2024 NusaBean Coffee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
