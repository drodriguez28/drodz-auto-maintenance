import { useEffect } from "react";
import { HeroSection } from "../reuse/HeroSection";
import { InfoCard } from "../reuse/InfoCard";
import { Gallery } from "../reuse/Gallery";

export const Painting = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paintingImages = [
    "/images/paint-1.jpeg",
    "/images/paint-2.jpeg",
    "/images/paint-3.jpeg",
    "/images/paint-4.jpeg",
    "/images/paint-5.jpeg",
    "/images/paint-6.jpeg",
    "/images/paint-7.jpeg",
    "/images/paint-8.jpeg",
    "/images/paint-9.jpeg",
    "/images/paint-10.jpeg",
    "/images/paint-11.jpeg",
    "/images/paint-12.jpeg",
    "/videos/paint-vid-2.mp4",
    "/videos/paint-vid-3.mp4",
    "/videos/paint-vid-4.mp4",
  ];

  return (
    <div className="mx-auto mt-10 px-4">
      <HeroSection
        title="Painting Services"
        description="We specialize in residential painting with over 25 years of experience. Our expert painters deliver high-quality finishes for interior and exterior projects, including cabinet painting, trim work, and other detailed painting services. We focus on precision, durability, and attention to detail to ensure your home looks its best."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mb-12 max-w-6xl mx-auto">
        <InfoCard
          imgSrc="/images/interior-painting.png"
          title="Interior Painting"
          description="Transform the inside of your home with professional interior painting services."
          horizontal={false}
          showButton={false}
        />

        <InfoCard
          imgSrc="/images/exterior-painting.png"
          title="Exterior Painting"
          description="Protect and beautify your home's exterior with our expert painting services."
          horizontal={false}
          showButton={false}
        />
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Take a Look at Our Work
        </h2>
        <Gallery images={paintingImages} />
      </div>
    </div>
  );
};
