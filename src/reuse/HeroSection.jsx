import React from "react";

export const HeroSection = ({ title, description, trustText }) => {
  return (
    <section className="bg-eggshell">
      <div className="py-8 px-4 mx-auto max-w-screen-2xl text-center lg:pt-16">
        
        <h1 className="mb-6 text-4xl font-bold tracking-tighter text-gray-900 md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {trustText && (
          <p className="text-lg md:text-xl text-red-800 font-semibold mb-4">
            {trustText}
          </p>
        )}

        <p className="mb-8 text-base font-normal text-gray-700 md:text-xl">
          {description}
        </p>

      </div>
    </section>
  );
};