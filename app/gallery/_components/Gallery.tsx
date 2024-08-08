"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  {
    src: "/Arabica 2.webp",
    alt: "Arabica Coffee Tree",
    title: "Arabica Coffee Tree",
  },
  {
    src: "/Robusta coffee tree.webp",
    alt: "Robusta Coffee Tree",
    title: "Robusta Coffee Tree",
  },
  {
    src: "/Arabica 1.webp",
    alt: "Arabica Coffee Farm",
    title: "Arabica Coffee Farm",
  },
  {
    src: "/Sun drying.webp",
    alt: "Coffee Sun Drying",
    title: "Coffee Sun Drying",
  },
  {
    src: "/Ft penjemuran.webp",
    alt: "Solar Dryier Dome",
    title: "Solar Dryer Dome",
  },
  {
    src: "/Robusta Green Bean.webp",
    alt: "Robusta Green Bean",
    title: "Robusta Green Bean",
  },
  {
    src: "/Gummy Bag Green Beans.webp",
    alt: "Gunny Bag Green Beans",
    title: "Gunny Bag Green Beans",
  },
  {
    src: "/Ft arabika 14.webp",
    alt: "Arabica Coffee Plantation",
    title: "Arabica Coffee Plantation",
  },
  {
    src: "/Mount Sumbing.webp",
    alt: "Mount Sumbing",
    title: "Mount Sumbing",
  },
];

const Modal: React.FC<{
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  children: React.ReactNode;
  layoutId: string;
}> = React.memo(({ isOpen, onClose, children, onNext, onPrev, layoutId }) => {
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
      const scrollBarWidth =
        window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75"
    >
      {/* Modal content */}
    </motion.div>
  );
});

const MobileFullscreenView: React.FC<{
  item: GalleryItem;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}> = React.memo(({ item, onClose, onNext, onPrev }) => {
  return (
    <div className="fixed inset-0 z-50 bg-black/85 flex flex-col">
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
});

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const openModal = useCallback(
    (item: GalleryItem, index: number) => {
      setSelectedImage(item);
      setSelectedIndex(index);
    },
    [setSelectedImage, setSelectedIndex]
  );

  const closeModal = useCallback(() => {
    setSelectedImage(null);
    setSelectedIndex(null);
  }, [setSelectedImage, setSelectedIndex]);

  const nextImage = useCallback(() => {
    setSelectedIndex((prevIndex) => {
      const nextIndex = (prevIndex! + 1) % galleryItems.length;
      setSelectedImage(galleryItems[nextIndex]);
      return nextIndex;
    });
  }, [setSelectedImage, setSelectedIndex]);

  const prevImage = useCallback(() => {
    setSelectedIndex((prevIndex) => {
      const newPrevIndex =
        (prevIndex! - 1 + galleryItems.length) % galleryItems.length;
      setSelectedImage(galleryItems[newPrevIndex]);
      return newPrevIndex;
    });
  }, [setSelectedImage, setSelectedIndex]);

  const memoizedGalleryItems = useMemo(
    () =>
      galleryItems.map((item, index) => (
        <motion.div
          key={index}
          layoutId={`gallery-item-${index}`}
          className="shadow-lg rounded-xl overflow-hidden relative cursor-pointer"
          onClick={() => openModal(item, index)}
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
        </motion.div>
      )),
    [galleryItems, openModal]
  );

  return (
    <div className="wrapper py-6 md:p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {memoizedGalleryItems}
      </div>

      <AnimatePresence>
        {!isMobile && selectedImage && (
          <Modal
            isOpen={selectedImage !== null}
            onClose={closeModal}
            onNext={nextImage}
            onPrev={prevImage}
            layoutId={`gallery-item-${selectedIndex}`}
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white p-4">
              <h3 className="text-xl text-center font-semibold">
                {selectedImage.title}
              </h3>
            </div>
          </Modal>
        )}
      </AnimatePresence>

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
