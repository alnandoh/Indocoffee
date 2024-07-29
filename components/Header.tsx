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

export default function Header() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      setIsVisible(false);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 left-0 w-full h-[60px] z-10 transition-transform duration-300 ${
        isVisible
          ? "translate-y-0 bg-slate-300/35 backdrop-blur"
          : "-translate-y-full bg-transparent"
      }`}
    >
      <div className="wrapper h-full flex justify-between items-center px-4">
        <Link href="/" className="">
          <div>Logo</div>
        </Link>
        <div className="hidden md:flex justify-between gap-4">
          <Link href="/products" className="nav-link">
            Products
          </Link>
          <Link href="/gallery" className="nav-link">
            Gallery
          </Link>
          <Link href="/contact-us" className="nav-link">
            Contact
          </Link>
        </div>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu className="h-6 w-6 m-auto" />
              </button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <SheetClose asChild>
                  <Link href="/" className="lg:hidden">
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/products" className="lg:nav-link">
                    Products
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/gallery" className="lg:nav-link">
                    Gallery
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact-us" className="lg:nav-link">
                    Contact
                  </Link>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
