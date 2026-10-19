import { useEffect } from "react";
import { HeroSection } from "../reuse/HeroSection";
import { InfoCard } from "../reuse/InfoCard";
import { Gallery } from "../reuse/Gallery";

export const Fencing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const fencingImages = [];

  return (
    <div className="mx-auto mt-10 px-4">
      <HeroSection
        title="Fencing Services"
        description="We provide professional fencing installation and repair with over 25 years of experience. We specialize in wood, aluminum, and chain-link fences — delivering durable, beautiful results tailored to your property and budget. We focus on quality craftsmanship and lasting results."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center mb-12 max-w-6xl mx-auto">
        <InfoCard
          imgSrc="/images/fencing-installation.png"
          title="Fence Installation"
          description="Get a brand-new fence installed with precision and quality materials built to last."
          horizontal={false}
          showButton={false}
        />

        <InfoCard
          imgSrc="/images/fencing-repair.png"
          title="Fence Repair"
          description="Restore damaged or aging fences with our expert repair services."
          horizontal={false}
          showButton={false}
        />
      </div>

      {fencingImages.length > 0 && (
        <div className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Take a Look at Our Work
          </h2>
          <Gallery images={fencingImages} />
        </div>
      )}
    </div>
  );
};
