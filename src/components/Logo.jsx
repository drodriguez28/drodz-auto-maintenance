import React from 'react';
import '../logo.css';

const Logo = ({ size = 'large' }) => {
  const sizeClass = size === 'small' ? 'logo-card-small' : '';

  return (
    <div className={`logo-card ${sizeClass}`}>
      {/* Wrench icon */}
      <svg className="logo-icon" viewBox="0 0 64 64" fill="currentColor" aria-hidden="true">
        <path d="M40 8a14 14 0 0 0-13 19L8 46a6 6 0 0 0 9 9l19-19a14 14 0 0 0 19-13l-9 9-7-2-2-7 9-9a14 14 0 0 0-6-6z" />
      </svg>

      <div className="logo-text">
        <div className="brand-name">D-RODZ</div>
        <div className="sub-title">Car Maintenance</div>
      </div>
    </div>
  );
};

export default Logo;
