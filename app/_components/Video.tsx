export default function Video() {
  return (
    <section className="bg-two-500 text-one-800" id="about-us">
      <div className="wrapper py-12 md:py-16 lg:py-24 xl:py-28">
        <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/sEhS83z3XRM?si=vnW1uIp-EJDcZYZ5"
            title="NusaBean company profile video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
