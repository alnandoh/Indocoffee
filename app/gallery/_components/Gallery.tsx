"use client";
import React, { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/Owner Photo.webp", alt: "Owner Photo", title: "Owner photo" },
  {
    src: "/With Farmer.webp",
    alt: "With farmer image 2",
    title: "With farmer",
  },
  {
    src: "/Mount Sumbing.webp",
    alt: "Mount Sumbing image",
    title: "Mount Sumbing",
  },
  { src: "/Arabica 1.webp", alt: "Arabica image 1", title: "Arabica Coffee" },
  { src: "/Arabica 2.webp", alt: "ArabicaImage 2", title: "Arabica Coffee" },
  {
    src: "/Gummy Bag Green Beans.webp",
    alt: "Gummy bag green beans image",
    title: "Gummy bag green beans",
  },
];

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
}> = ({ isOpen, onClose, children, onNext, onPrev }) => {
  const handleEscape = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-w-[85vw] w-full max-h-[85vh] bg-white rounded-lg shadow-xl overflow-hidden"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 p-2 bg-black/50 text-white rounded-full hover:bg-black/75 transition-colors z-10"
        >
          <X size={24} />
        </button>
        <button
          onClick={onPrev}
          className="absolute w-10 h-10 left-2 transform -translate-y-1/2 top-1/2 p-2 bg-black/65 text-white rounded-full hover:bg-black/80 transition-colors z-10"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={onNext}
          className="absolute w-10 h-10 right-2 transform -translate-y-1/2 top-1/2 p-2 bg-black/65 text-white rounded-full hover:bg-black/80 transition-colors z-10"
        >
          <ChevronRight size={24} />
        </button>
        {children}
      </div>
    </div>
  );
};

const MobileFullscreenView: React.FC<{
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = ({ item, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      <div className="relative flex-grow flex items-center justify-center">
        <Image
          src={item.src}
          alt={item.alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="bg-black/75 text-white p-4">
        <h3 className="text-xl text-center font-semibold mb-2">{item.title}</h3>
        <div className="flex justify-between">
          <button onClick={onPrev} className="p-2">
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-white text-black rounded"
          >
            Close
          </button>
          <button onClick={onNext} className="p-2">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openModal = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.src === selectedImage?.src
    );
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedImage(galleryItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = galleryItems.findIndex(
      (item) => item.src === selectedImage?.src
    );
    const prevIndex =
      (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedImage(galleryItems[prevIndex]);
  };

  return (
    <div className="wrapper p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={index}
            className="shadow-lg rounded-xl overflow-hidden relative cursor-pointer"
            onClick={() => openModal(item)}
          >
            <div className="relative h-80">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="w-full text-center absolute bottom-0 py-2 bg-black/65 text-white">
              <h3 className="text-lg font-semibold">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {!isMobile && (
        <Modal
          isOpen={selectedImage !== null}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        >
          {selectedImage && (
            <>
              <div className="relative w-full h-full">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  layout="responsive"
                  width={1920}
                  height={1080}
                  objectFit="contain"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
                <h3 className="text-xl text-center font-semibold">
                  {selectedImage.title}
                </h3>
              </div>
            </>
          )}
        </Modal>
      )}

      {isMobile && selectedImage && (
        <MobileFullscreenView
          item={selectedImage}
          onClose={closeModal}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
};

export default Gallery;
