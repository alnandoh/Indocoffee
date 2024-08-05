import React from "react";
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
    name: "Robusta - Java Temanggung Extended Natural (Wine)",
    image: "/Robusta Wine.webp",
    process: "Extended Natural (Wine)",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "Max 8%",
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
    name: "Robusta - Java Temanggung Natural",
    image: "/Robusta Natural.webp",
    process: "Natural",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "Max 8%",
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
    name: "Robusta - Java Temanggung Honey",
    image: "/Robusta Honey.webp",
    process: "Honey",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "Max 8%",
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
    name: "Arabica - Java Temanggung Wine",
    image: "/Arabika - Wine.webp",
    process: "Wine",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "Under 11%",
    flavors: [
      "Medium body",
      "Strawberry",
      "Orange",
      "Star Fruit",
      "Tropical Fruit",
      "Berries",
    ],
  },
  {
    name: "Arabica - Java Temanggung Natural",
    image: "/Arabika - Natural.webp",
    process: "Natural",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "Under 11%",
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
    name: "Arabica - Java Temanggung Honey",
    image: "/Arabika Honey 1.webp",
    process: "Honey",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "Under 11%",
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
    name: "Arabica - Java Temanggung Grade 1 Full Wash",
    image: "/Arabika G1 - Full Wash.webp",
    process: "Full Wash",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "1500-1800 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "15/16",
    defect: "Under 11%",
    flavors: [
      "Medium body",
      "Lemon & Lime",
      "Caramel",
      "Chocolate",
      "Hazelnut",
    ],
  },
  {
    name: "Robusta - Java Temanggung Fine",
    image: "/Robusta Green Bean.webp",
    process: "Dry",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "100% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "Max 8%",
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
    name: "Robusta - Java Temanggung Grade 1",
    image: "/Robusta G1.webp",
    process: "Dry",
    origin: "Temanggung, Central Java, Indonesia",
    altitude: "800-900 MASL",
    harvest: "80% red cherry",
    moisture: "12%",
    size: "13/19",
    defect: "Under 11%",
    flavors: [
      "Bold body",
      "Strong Aroma",
      "Chocolate",
      "Caramel",
      "Spicy",
      "Brown Sugar",
    ],
  },
];

const CoffeeProductDisplay = () => {
  return (
    <section className="wrapper py-6 md:py-10 lg:py-16">
      <div className="space-y-8">
        {productData.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="bg-white shadow-light transition duration-200 ease-in hover:shadow-bold rounded-xl overflow-hidden flex flex-col sm:flex-row border border-slate-200">
      <div className="relative w-full sm:w-1/3 h-48 sm:h-auto">
        <Image
          src={product.image}
          alt={product.name}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <div className="uppercase tracking-wide text-sm text-one-700 font-semibold">
          {product.process}
        </div>
        <h2>{product.name}</h2>
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-3">
          <ProductInfo
            icon={<MapPin className="w-4 h-4" />}
            label="Origin"
            value={product.origin}
          />
          <ProductInfo
            icon={<Mountain className="w-4 h-4" />}
            label="Altitude"
            value={product.altitude}
          />
          <ProductInfo
            icon={<Calendar className="w-4 h-4" />}
            label="Harvest"
            value={product.harvest}
          />
          <ProductInfo
            icon={<Droplet className="w-4 h-4" />}
            label="Moisture"
            value={product.moisture}
          />
          <ProductInfo
            icon={<Layers className="w-4 h-4" />}
            label="Size"
            value={product.size}
          />
          <ProductInfo
            icon={<XCircle className="w-4 h-4" />}
            label="Defect"
            value={product.defect}
          />
        </div>
        <div className="mt-4">
          <h3>Flavor Profile</h3>
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

const ProductInfo = ({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) => (
  <div className="flex items-center">
    {icon}
    <div className="ml-2">
      <div className="text-xs text-gray-500">{label}</div>
      <div className="text-xs sm:text-sm font-medium text-gray-900">
        {value}
      </div>
    </div>
  </div>
);

export default CoffeeProductDisplay;
