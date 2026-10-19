import React from "react";
import { Card } from "flowbite-react";

export const InfoCard = ({ 
  imgSrc, 
  title, 
  description, 
  subtitle, 
  listItems = [], 
  footer,
  buttonText = "Learn More",
  onButtonClick,
  showButton = true,
  horizontal = true,
  className = "max-w-sm"
}) => {
  return (
    <Card className={`${className} !bg-white`} imgSrc={imgSrc} horizontal={horizontal}>
      {title && (
        <h5 className="text-2xl font-bold tracking-tight text-black">
          {title}
        </h5>
      )}
      
      {description && (
        <p className="font-normal text-gray-700">
          {description}
        </p>
      )}
      
      {subtitle && (
        <h6 className="text-lg font-semibold mt-4 text-gray-900">
          {subtitle}
        </h6>
      )}
      
      {listItems.length > 0 && (
        <ul className="font-normal text-gray-700 list-disc list-inside">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      
      {footer && (
        <p className="font-normal text-gray-700 mt-4">
          {footer}
        </p>
      )}
      
      {/* Button - Only show if showButton is true */}
      {showButton && (
        <button
          onClick={onButtonClick}
          className="mt-4 w-full bg-red-800 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-700 transition"
        >
          {buttonText}
        </button>
      )}
    </Card>
  );
};