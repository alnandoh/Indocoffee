export default function Video() {
  return (
    <section className="bg-two-500 text-one-800" id="about-us">
      <div className="wrapper py-12 md:py-16 lg:py-24 xl:py-28">
        <h2 className="lg:max-w-3xl mx-auto font-bold text-center leading-tight animate-fade-in mb-4 md:mb-6 lg:mb-8">
          Company Profile Video
        </h2>
        <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden">
          <div className="w-full h-full bg-gray-200 flex items-center justify-center cursor-pointer">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/buFO4MtYWAk?si=v_xEWsHKkQqcdtXw"
              title="NusaBean company profile video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              loading="lazy"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
}
