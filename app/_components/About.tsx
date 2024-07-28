import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Microscope, Hammer, Shield, Leaf } from "lucide-react";

const cardData = [
  {
    icon: <Microscope className="w-8 h-8 mx-auto text-blue-500" />,
    title: "Research",
    content:
      "We always research every commodity that we are going to sell or supply...",
  },
  {
    icon: <Hammer className="w-8 h-8 mx-auto text-green-500" />,
    title: "Development",
    content: "We are committed to giving the best for our customers...",
  },
  {
    icon: <Shield className="w-8 h-8 mx-auto text-yellow-500" />,
    title: "Integrity",
    content:
      "We always conduct our business with integrity and professionalism...",
  },
  {
    icon: <Leaf className="w-8 h-8 mx-auto text-green-700" />,
    title: "Sustainability",
    content:
      "We believe that doing our business responsibly and caring about sustainability...",
  },
];

export default function About() {
  return (
    <section className="wrapper py-16 min-h-screen flex flex-col gap-8 justify-center bg-green-600">
      <h2 className="text-center text-3xl font-bold animate-fadeInUp">
        About NusaBean Coffee
      </h2>
      <p className="text-center max-w-3xl mx-auto animate-fadeIn">
        We are Filbert and Richard from Semarang City. Since 2021, we have been
        exporting Indonesian commodities such as recycled plastics and charcoal
        briquettes to several countries. During our recent trip to Temanggung
        Regency, just a two-hour drive from our home, we discovered the
        exceptional quality of the local coffee. We were impressed not only by
        the superior quality of the coffee beans but also by the advanced
        post-harvest processing techniques, such as natural, dry, and wine
        processes, employed by the coffee growers. Inspired by this discovery,
        we decided to introduce these high-quality products to the global
        audience, so more people can enjoy the unique flavors of Indonesian
        coffee.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fadeIn">
        {cardData.map((card, index) => (
          <Card
            key={index}
            className="text-center transition-transform transform hover:scale-105"
          >
            <CardHeader>
              <div className="border-stone-300 mx-auto flex items-center justify-center w-16 h-16 rounded-full border p-2">
                {card.icon}
              </div>
              <CardTitle className="text-xl font-semibold">
                {card.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{card.content}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
