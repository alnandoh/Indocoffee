import React, { useMemo } from "react";
import Image from "next/image";
import {
  Coffee,
  MapPin,
  Droplet,
  Mountain,
  Calendar,
  Layers,
  XCircle,
} from "lucide-react";

interface Product {
  name: string;
  image: string;
  process: string;
  origin: string;
  altitude: string;
  harvest: string;
  moisture: string;
  size: string;
  defect: string;
  flavors: string[];
}

const productData: Product[] = [
  {
    name: "Robusta - Robusta Grade 1 Java Temanggung",
    image: "/Robusta G1.webp",
    process: "Dry",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "80% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "Max 11%",
    flavors: [
      "Bold body",
      "Strong Aroma",
      "Chocolate",
      "Caramel",
      "Spicy",
      "Brown Sugar",
    ],
  },
  {
    name: "Robusta - Robusta Fine Java Temanggung",
    image: "/Robusta Fine.webp",
    process: "Dry",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "3-8%",
    flavors: [
      "Bold body",
      "Strong Aroma",
      "Chocolate",
      "Caramel",
      "Spicy",
      "Brown Sugar",
    ],
  },
  {
    name: "Robusta - Robusta Honey Java Temanggung",
    image: "/Robusta Honey.webp",
    process: "Honey",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "3-8%",
    flavors: [
      "Bold body",
      "Strong Aroma",
      "Chocolate",
      "Caramel",
      "Spicy",
      "Brown Sugar",
      "Honey",
    ],
  },
  {
    name: "Robusta - Robusta Natural Java Temanggung",
    image: "/Robusta Natural.webp",
    process: "Natural",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "3-8%",
    flavors: [
      "Bold body",
      "Strong Aroma",
      "Chocolate",
      "Caramel",
      "Spicy",
      "Brown Sugar",
      "Fruity",
    ],
  },
  {
    name: "Robusta - Robusta Extended Natural (Wine) Java Temanggung ",
    image: "/Robusta Wine.webp",
    process: "Extended Natural (Wine)",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "3-8%",
    flavors: [
      "Bold body",
      "Strong Aroma",
      "Chocolate",
      "Caramel",
      "Spicy",
      "Brown Sugar",
      "Winey",
    ],
  },

  {
    name: "Arabica - Arabica Grade 1 Full Wash Java Temanggung ",
    image: "/Arabika G1 - Full Wash.webp",
    process: "Full Wash",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "Max 11%",
    flavors: [
      "Medium body",
      "Lemon & Lime",
      "Caramel",
      "Chocolate",
      "Hazelnut",
    ],
  },

  {
    name: "Arabica - Arabica Natural Java Temanggung",
    image: "/Arabika - Natural.webp",
    process: "Natural",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "3-8%",
    flavors: [
      "Medium body",
      "Melon",
      "Apple",
      "Stone Fruit",
      "Fruity",
      "Cocoa",
      "Hints of nutty",
    ],
  },
  {
    name: "Arabica - Arabica Honey Java Temanggung",
    image: "/Arabika Honey 1.webp",
    process: "Honey",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "3-8%",
    flavors: [
      "Medium body",
      "Berry",
      "Lime",
      "Honey",
      "Stone Fruit",
      "Hazelnut",
      "Cocoa",
    ],
  },
  {
    name: "Arabica - Arabica Wine Java Temanggung",
    image: "/Arabika Wine 1.webp",
    process: "Wine",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "3-8%",
    flavors: [
      "Medium body",
      "Strawberry",
      "Orange",
      "Star Fruit",
      "Tropical Fruit",
      "Berries",
    ],
  },
];

const varietyDescriptions: Record<string, string> = {
  Arabica: `Temanggung Regency in Central Java is a major producer of tobacco and coffee beans. The region's unique intercropping with tobacco plants imparts a subtle tobacco aftertaste to the Arabica coffee, resulting in a distinctive flavor profile. Our Java Temanggung Arabica Green Coffee Beans are rich and complex, ideal for those seeking a unique coffee experience.
Temanggung Arabica was highlighted as one of Indonesia's top specialty coffees at the SCAA Expo 2016 in Atlanta, with Indonesia honored as the Portrait Country, showcasing its rich coffee heritage and global recognition.`,
  Robusta: `Temanggung Regency produces some of the finest organic Robusta coffee, known for its strong aroma and rich flavors with notes of chocolate, brown sugar, and spice. Our skilled farmers use advanced post-harvest techniques, including natural, honey, and wine processing, creating a standout coffee.
Temanggung Robusta has earned international recognition, winning a bronze medal in 2018 and a gold medal in 2019 at the AVPA awards in Paris, showcasing the exceptional craftsmanship of its farmers.`,
};

const CoffeeProductDisplay: React.FC = () => {
  const groupedProducts: Record<string, Product[]> = useMemo(() => {
    return productData.reduce((acc, product) => {
      const variety = product.name.split(" - ")[0];
      if (!acc[variety]) {
        acc[variety] = [];
      }
      acc[variety].push(product);
      return acc;
    }, {} as Record<string, Product[]>);
  }, [productData]);

  return (
    <section className="wrapper py-6 md:py-10 lg:py-16">
      {Object.entries(groupedProducts).map(([variety, products]) => (
        <div key={variety} className="mb-12" id={variety}>
          <h2 className="mb-4 text-one-800 border-b-2 border-one-600 pb-2">
            {variety} Coffee Products
          </h2>
          <div className="mb-6 whitespace-pre-line text-justify">
            {varietyDescriptions[variety]}
          </div>
          <div className="space-y-8">
            {products.map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const formatProductName = useMemo(() => {
    const [variety, details] = product.name.split(" - ");
    const type = details.replace(" Java Temanggung", "");
    return `${type} - Java Temanggung`;
  }, [product.name]);

  return (
    <div className="bg-white shadow-light transition duration-200 ease-in hover:shadow-bold rounded-xl overflow-hidden flex flex-col sm:flex-row border border-slate-200">
      <div className="w-full flex items-center justify-center sm:w-1/3 sm:h-auto">
        <div className="relative w-80 h-80 rounded-full overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="scale-125"
          />
        </div>
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="font-bold text-one-800 mt-1">{formatProductName}</h3>
        <div className="md:text-xl uppercase tracking-wide text-xs text-one-700 font-semibold">
          {product.process}
        </div>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          {[
            {
              icon: <MapPin className="w-4 h-4" />,
              label: "Origin",
              value: product.origin,
            },
            {
              icon: <Mountain className="w-4 h-4" />,
              label: "Altitude",
              value: product.altitude,
            },
            {
              icon: <Calendar className="w-4 h-4" />,
              label: "Harvest",
              value: product.harvest,
            },
            {
              icon: <Droplet className="w-4 h-4" />,
              label: "Moisture",
              value: product.moisture,
            },
            {
              icon: <Layers className="w-4 h-4" />,
              label: "Size",
              value: product.size,
            },
            {
              icon: <XCircle className="w-4 h-4" />,
              label: "Defect",
              value: product.defect,
            },
          ].map((info, index) => (
            <ProductInfo key={index} {...info} />
          ))}
        </div>
        <div className="mt-4">
          <h4 className="font-semibold text-one-800">Flavor Profile</h4>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.flavors.map((flavor, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-two-500 text-one-800 rounded-full text-xs"
              >
                {flavor}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductInfo: React.FC<{
  icon: React.ReactNode;
  label: string;
  value: string;
}> = ({ icon, label, value }) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-2">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xs sm:text-sm lg:text-base font-medium text-gray-900">
        {value}
      </div>
    </div>
  </div>
);

export default CoffeeProductDisplay;
