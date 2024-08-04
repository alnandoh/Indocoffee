import Image, { StaticImageData } from "next/image";
interface PageHeaderProps {
  img: StaticImageData;
  title: string;
}

export default function PageHeader({ img, title }: PageHeaderProps) {
  return (
    <section className="h-[40vh] relative bg-black/50">
      <Image src={img} alt="Coffee Beans" fill className="object-cover -z-10" />
      <div className="wrapper h-full flex justify-center items-center">
        <h1 className="text-white">{title}</h1>
      </div>
    </section>
  );
}
