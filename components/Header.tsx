"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import logoWhite from "@/public/NusaBean Logo - Normal.svg";
import logoBlack from "@/public/NusaBean Logo - Hitam.svg";

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);

    setAtTop(currentScrollY === 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky sm:fixed top-0 left-0 w-full h-[80px] z-10 transition duration-300 ${
        isVisible
          ? atTop
            ? "bg-one-800 md:bg-transparent text-white"
            : "bg-three/30 backdrop-blur border-b border-black"
          : "-translate-y-full bg-transparent opacity-10"
      }`}
    >
      <div className="wrapper h-full flex justify-between items-center px-4">
        <Link href="/" className="flex items-center h-full">
          <div className="relative h-20 w-20">
            {atTop ? (
              <Image
                src={logoWhite}
                alt="NusaBean Logo"
                fill
                className="object-contain"
              />
            ) : (
              <Image
                src={logoBlack}
                alt="NusaBean Logo"
                fill
                className="object-contain"
              />
            )}
          </div>
        </Link>
        <div className="hidden md:flex justify-between gap-4">
          <Link href="/" className="nav-link">
            Home
          </Link>
          <Link href="/#about-us" className="nav-link" passHref>
            About Us
          </Link>
          <Link href="/products" className="nav-link">
            Products
          </Link>
          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="#contact-us" className="nav-link" passHref>
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button
                aria-label="Open menu"
                className={`p-2 rounded-md hover:bg-white/20 transition-colors ${
                  atTop ? "text-white" : "text-black"
                }`}
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-8 rounded-lg">
              <div className="flex flex-col gap-4">
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="text-lg font-semibold hover:text-gray-700"
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/#about-us"
                    className="text-lg font-semibold hover:text-gray-700"
                    passHref
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/products"
                    className="text-lg font-semibold hover:text-gray-700"
                  >
                    Products
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/gallery"
                    className="text-lg font-semibold hover:text-gray-700"
                  >
                    Gallery
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="#contact-us"
                    className="text-lg font-semibold hover:text-gray-700"
                    passHref
                  >
                    Contact Us
                  </Link>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
