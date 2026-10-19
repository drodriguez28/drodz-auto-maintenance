import React from "react";

export const ProfileCard = ({ 
  image, 
  name, 
  title, 
  description,
  showButtons = true 
}) => {
  return (
    <div className="bg-white max-w-xs w-full p-6 border border-gray-300 rounded-lg shadow-sm">
      <div className="flex flex-col items-center">
        {/* Profile Image */}
        <img 
          className="w-40 h-42 mb-6 rounded-full object-cover" 
          src={image} 
          alt={name}
        />
        
        {/* Name */}
        <h5 className="mb-0.5 text-xl font-semibold tracking-tight text-gray-900">
          {name}
        </h5>
        
        {/* Title */}
        <span className="text-sm text-gray-700">
          {title}
        </span>
        
        {/* Description */}
        {description && (
          <p className="text-sm text-gray-700 text-center mt-2">
            {description}
          </p>
        )}
        
        {/* Buttons */}
        {showButtons && (
          <div className="flex mt-4 md:mt-6 gap-4">
            <button 
              type="button" 
              className="inline-flex items-center text-white bg-red-800 hover:bg-red-700 focus:ring-4 focus:ring-red-600 font-medium rounded-lg text-sm px-4 py-2.5"
            >
              <svg className="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12h4m-2 2v-4M4 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/></svg>
              Follow
            </button>
            <button 
              type="button" 
              className="inline-flex text-gray-700 bg-gray-200 hover:bg-gray-300 border border-gray-300 focus:ring-4 focus:ring-gray-400 font-medium rounded-lg text-sm px-4 py-2.5"
            >
              Message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};