import React, { useEffect } from 'react';
import { ProfileCard } from "../reuse/ProfileCard";
import { ContactCard } from "../reuse/ContactCard";
import { LanguageSupport } from "../reuse/LanguageSupport";
import ServiceAreaMap from '../reuse/ServiceAreaMap';

export function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="mx-auto mt-10 px-2 max-w-6xl">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Contact Us</h1>
        <p className="text-gray-600 text-lg">Get in touch with us today for your home service needs</p>
        <LanguageSupport className="mt-4" />
      </div>

      {/* Responsive Grid - 2 columns on desktop, 1 on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-16">
        <div className="flex items-center justify-center">
          <ContactCard pageName="Contact Us Page"/>
        </div>
        <div className="flex items-center justify-center">
          <ProfileCard
            image="/images/deivid.png"
            name="Deivid Rodriguez"
            title="Owner"
            showButtons={false}
          />
        </div>
      </div>

      {/* Service Map Full Width */}
      <ServiceAreaMap />
    </div>
  );
}