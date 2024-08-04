import PageHeader from "@/components/PageHeader";
import hero from "@/public/Hero.webp";
import ContactInfo from "./_components/ContactInfo";

export default function page() {
  return (
    <div className="min-h-screen">
      <PageHeader
        img={hero}
        title={"Contact Us"}
        subtitle={
          "Get in touch with us! We are glad to receive your inquiry, questions, comments or suggestions."
        }
      />
      <ContactInfo />
    </div>
  );
}
