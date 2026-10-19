import { useNavigate } from "react-router-dom";
import { InfoCard } from "../reuse/InfoCard";
import { HeroSection } from "../reuse/HeroSection";
import { ContactCard } from "../reuse/ContactCard";
import { LanguageSupport } from "../reuse/LanguageSupport";
import ServiceAreaMap from "../reuse/ServiceAreaMap";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="mx-auto mt-10 px-4">
      <div className="mb-5 text-center max-w-3xl mx-auto">
        <HeroSection
          title="Professional Home Services"
          trustText="Highly Rated on Google • Trusted in Metro Atlanta"
          description="We focus on delivering quality home services tailored to your needs in Metro Atlanta. From interior and exterior painting to electrical work and fencing, we handle all aspects of residential projects with care and attention to detail."
        />
        <LanguageSupport />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-8 max-w-6xl mx-auto">
        <InfoCard
          imgSrc="/images/painting-home.png"
          title="Painting"
          description="Professional interior and exterior painting services to transform your home."
          horizontal={false}
          onButtonClick={() => navigate("/painting")}
        />
        <InfoCard
          imgSrc="/images/fencing-installation.png"
          title="Fencing"
          description="Professional fencing installation and repair for your home and property."
          horizontal={false}
          onButtonClick={() => navigate("/fencing")}
        />
        <InfoCard
          imgSrc="/images/electrical-home.png"
          title="Electrical"
          description="Electrical services for residential repairs, installations, and upgrades."
          horizontal={false}
          onButtonClick={() => navigate("/electrical")}
        />
      </div>

      <ContactCard pageName="Home Page" />

      <ServiceAreaMap />
    </div>
  );
}

export default Home;
