import React from 'react';
import '../logo.css';
import pugImage from '/images/pug-logo.png';


const Logo = ({ size = 'large' }) => {
  const sizeClass = size === 'small' ? 'logo-card-small' : '';
  
  return (
    <div className={`logo-card ${sizeClass}`}>
      <div className="corner tl"></div>
      <div className="corner tr"></div>
      <div className="corner bl"></div>
      <div className="corner br"></div>

      {/* PUG IMAGE */}
      <div className="pug-wrap">
        <img 
          src={pugImage}
          alt="D-RODZ mascot pug"
        />
      </div>

      <div className="divider"></div>

      {/* TEXT */}
      <div className="text-block">
        <div className="brand-name">D-RODZ</div>

        <div className="rule-wrap">
          <div className="rule-line"></div>
          <div className="rule-diamond"></div>
          <div className="rule-line rev"></div>
        </div>

        <div className="sub-title">Home Services</div>
        <div className="tagline">Quality You Can Trust</div>

        {/* Paw prints */}
        <div className="paw-row">
          <div className="paw">
            <svg viewBox="0 0 40 40">
              <ellipse cx="20" cy="26" rx="10" ry="12"/>
              <ellipse cx="8" cy="14" rx="5" ry="6"/>
              <ellipse cx="20" cy="10" rx="5" ry="6"/>
              <ellipse cx="32" cy="14" rx="5" ry="6"/>
            </svg>
          </div>
          <div className="paw">
            <svg viewBox="0 0 40 40">
              <ellipse cx="20" cy="26" rx="10" ry="12"/>
              <ellipse cx="8" cy="14" rx="5" ry="6"/>
              <ellipse cx="20" cy="10" rx="5" ry="6"/>
              <ellipse cx="32" cy="14" rx="5" ry="6"/>
            </svg>
          </div>
          <div className="paw">
            <svg viewBox="0 0 40 40">
              <ellipse cx="20" cy="26" rx="10" ry="12"/>
              <ellipse cx="8" cy="14" rx="5" ry="6"/>
              <ellipse cx="20" cy="10" rx="5" ry="6"/>
              <ellipse cx="32" cy="14" rx="5" ry="6"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;