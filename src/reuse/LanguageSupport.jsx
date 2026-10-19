import React from 'react';

export function LanguageSupport({ className = "" }) {
  return (
    <div className={`text-center py-4 ${className}`}>
      <p className="text-xl md:text-2xl font-bold text-gray-900">
        Hablamos Español & English
      </p>
    </div>
  );
}