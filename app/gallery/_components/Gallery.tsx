import Image from "next/image";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

interface GalleryItem {
  src: string;
  alt: string;
  title: string;
}

const galleryItems: GalleryItem[] = [
  { src: "/images/image1.jpg", alt: "Image 1", title: "Beautiful Landscape" },
  { src: "/images/image2.jpg", alt: "Image 2", title: "Mountain View" },
  { src: "/images/image3.jpg", alt: "Image 3", title: "Sunny Beach" },
];

const Gallery: React.FC = () => {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {galleryItems.map((item, index) => (
        <Card key={index} className="shadow-lg rounded-lg overflow-hidden">
          <Image
            src={item.src}
            alt={item.alt}
            width={500}
            height={300}
            className="object-cover"
          />
          <CardContent>
            <CardTitle className="text-lg font-semibold">
              {item.title}
            </CardTitle>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Gallery;
