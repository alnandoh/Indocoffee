"use client";
import LiteYouTubeEmbed from "react-lite-youtube-embed";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

interface YouTubeVideoProps {
  videoId: string;
  title: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoId, title }) => {
  return (
    <div className="aspect-video rounded-lg md:rounded-xl overflow-hidden">
      <LiteYouTubeEmbed
        id={videoId}
        title={title}
        adNetwork={true}
        params="autoplay=1&rel=0"
      />
    </div>
  );
};

export default function Video() {
  return (
    <section className="bg-two-500 text-one-800" id="about-us">
      <div className="wrapper py-12 md:py-16 lg:py-24 xl:py-28">
        <h2 className="lg:max-w-3xl mx-auto font-bold text-center leading-tight animate-fade-in mb-4 md:mb-6 lg:mb-8">
          Company Profile Video
        </h2>
        <YouTubeVideo
          videoId="buFO4MtYWAk"
          title="NusaBean company profile video"
        />
      </div>
    </section>
  );
}
