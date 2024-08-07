import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";
import React from "react";

export default function ContactInfo() {
  return (
    <section className="wrapper py-6">
      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="flex flex-col gap-6">
          <h2>Our Contact</h2>
          <div className="flex items-center gap-4">
            <MapPin className="w-6 h-6 text-red-600" />
            <div>
              <p className="text-lg font-semibold">Address</p>
              <p className="text-gray-700">
                Jl. Brotojoyo No.4D 22, RW.23, Plombokan,
                <br />
                Semarang Utara, Kota Semarang, Jawa Tengah 50171
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-6 h-6 text-green-500" />
            <div>
              <p className="text-lg font-semibold">Phone Number</p>
              <p className="text-gray-700">+62 852-3222-6993</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Mail className="w-6 h-6 text-gray-600" />
            <div>
              <p className="text-lg font-semibold">Email Address</p>
              <p className="text-gray-700">nusabean.coffee@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6 mb-8">
          <h2>Get in touch</h2>
          <p>
            <span className="font-bold animate-pulse">Interested?</span> Check
            our other social media:
          </p>
          <div className="flex items-center gap-4">
            <a href="www.instagram.com">
              <Instagram className="w-8 h-8 transition duration-200 ease-in-out hover:scale-105" />
            </a>
            <a href="www.facebook.com">
              <Facebook className="w-8 h-8 transition duration-200 ease-in-out hover:scale-105" />
            </a>
            <a href="www.instagram.com">
              <Youtube className="w-8 h-8 transition duration-200 ease-in-out hover:scale-105" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative w-full h-60 md:h-96 rounded-xl overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31682.3820074271!2d110.39271370742769!3d-6.97415470777513!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70f4b6d66b2df5%3A0xdabdca791c757a8c!2sJl.%20Brotojoyo%20No.4D%2022%2C%20RW.23%2C%20Plombokan%2C%20Kec.%20Semarang%20Utara%2C%20Kota%20Semarang%2C%20Jawa%20Tengah%2050171!5e0!3m2!1sen!2sid!4v1722789082326!5m2!1sen!2sid"
          className="w-full h-full "
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
