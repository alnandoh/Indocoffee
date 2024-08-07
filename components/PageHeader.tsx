import Head from "next/head";
import Image, { StaticImageData } from "next/image";
interface PageHeaderProps {
  img: StaticImageData;
  title: string;
  subtitle?: string;
}

export default function PageHeader({ img, title, subtitle }: PageHeaderProps) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title || subtitle} />
      </Head>
      <section className="h-[30vh] md:h-[40vh] relative bg-black/70">
        <Image
          src={img}
          alt="Page Header Image"
          fill
          className="object-cover -z-10"
        />
        <div className="wrapper h-full flex flex-col justify-center items-center text-center text-white gap-6">
          <h1 className="md:pt-10">{title}</h1>
          <p className="text-base lg:text-lg">{subtitle}</p>
        </div>
      </section>
    </>
  );
}
