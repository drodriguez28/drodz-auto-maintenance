import { HeroSection } from "../reuse/HeroSection";
import { VehicleSelector } from "../reuse/VehicleSelector";

function Home() {
  return (
    <div className="mx-auto mt-10 px-4">
      <div className="mb-8 text-center max-w-3xl mx-auto">
        <HeroSection
          title="Know What Your Car Needs"
          trustText="Pick your make, model & year"
          description="Find a general maintenance schedule for your vehicle — oil, brakes, filters, fluids and more."
        />
      </div>

      <div className="mb-14">
        <VehicleSelector />
      </div>
    </div>
  );
}

export default Home;
