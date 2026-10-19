import React, { useState } from 'react'

const images = [
  "/images/condo.png",
  "/images/condo2.png",
  "/images/condo3.png",
];

function Carousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-md flex flex-col items-center">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="rounded shadow-lg w-full h-64 object-cover mb-4"
      />
      <div className="flex justify-between w-full px-4">
        <button
          onClick={prevSlide}
          className="px-3 py-1 bg-black rounded hover:bg-gray-300"
        >
          Prev
        </button>
        <button
          onClick={nextSlide}
          className="px-3 py-1 bg-black rounded hover:bg-gray-300"
        >
          Next
        </button>
      </div>
      <div className="flex justify-center mt-2 space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-2 h-2 rounded-full ${idx === current ? 'bg-blue-600' : 'bg-gray-300'}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel