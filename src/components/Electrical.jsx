import { useEffect } from "react";
import { HeroSection } from "../reuse/HeroSection";
import { InfoCard } from "../reuse/InfoCard";
import { Gallery } from "../reuse/Gallery";

export const Electrical = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const electricalImages = [
    "/images/electric-2.jpeg",
    "/images/electric-7.jpeg",
    "/images/electric-3.jpeg",
    "/images/electric-5.jpeg",
    "/images/electric-6.jpeg",
    "/images/electric-4.png",
    "/images/electric-8.jpeg"
  ];

  return (
    <div className="mx-auto mt-10 px-4">
      <HeroSection
        title="Electrical Services"
        description="We handle basic electrical work for homes, including repairs, installations, and troubleshooting. Our team ensures your electrical systems are working safely and efficiently."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mb-12 max-w-6xl mx-auto">
        <InfoCard
          imgSrc="/images/electrical-wiring.png"
          title="Electrical Repairs"
          description="Fixing outlets, switches, and wiring issues to keep your home running smoothly."
          horizontal={false}
          showButton={false}
        />

        <InfoCard
          imgSrc="/images/electrical-installing.png"
          title="Installations"
          description="Installing new lights, ceiling fans, and other electrical fixtures for your home."
          horizontal={false}
          showButton={false}
        />
      </div>

      <div className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">Take a Look at Our Work</h2>
        <Gallery images={electricalImages} />
      </div>
    </div>
  );
};