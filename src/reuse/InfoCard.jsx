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
    <Card className={`${className} !bg-garage-800 !border-garage-700`} imgSrc={imgSrc} horizontal={horizontal}>
      {title && (
        <h5 className="text-2xl font-bold tracking-tight text-white">
          {title}
        </h5>
      )}

      {description && (
        <p className="font-normal text-gray-400">
          {description}
        </p>
      )}

      {subtitle && (
        <h6 className="text-lg font-semibold mt-4 text-gray-200">
          {subtitle}
        </h6>
      )}

      {listItems.length > 0 && (
        <ul className="font-normal text-gray-400 list-disc list-inside">
          {listItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {footer && (
        <p className="font-normal text-gray-400 mt-4">
          {footer}
        </p>
      )}

      {showButton && (
        <button
          onClick={onButtonClick}
          className="mt-4 w-full bg-accent-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-accent-600 transition"
        >
          {buttonText}
        </button>
      )}
    </Card>
  );
};
