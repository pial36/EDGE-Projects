import React, { useRef } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLParagraphElement>(null);
  const fontSizes = ['12px', '14px', '16px', '18px', '20px', '24px', '28px', '32px'];
  const [currentSizeIndex, setCurrentSizeIndex] = React.useState(2);

  const increaseFontSize = () => {
    if (currentSizeIndex < fontSizes.length - 1) {
      setCurrentSizeIndex(prev => prev + 1);
      if (footerRef.current) {
        footerRef.current.style.fontSize = fontSizes[currentSizeIndex + 1];
      }
    }
  };

  const decreaseFontSize = () => {
    if (currentSizeIndex > 0) {
      setCurrentSizeIndex(prev => prev - 1);
      if (footerRef.current) {
        footerRef.current.style.fontSize = fontSizes[currentSizeIndex - 1];
      }
    }
  };

  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <p 
              ref={footerRef} 
              className="mb-0"
              style={{ transition: 'font-size 0.3s ease' }}
            >
              © 2024 Color Changing Demo. All rights reserved.
            </p>
          </div>
          <div className="col-md-6">
            <div className="d-flex justify-content-md-end align-items-center">
              <span className="me-3">Footer Size:</span>
              <div className="btn-group">
                <button 
                  onClick={decreaseFontSize} 
                  className="btn btn-outline-light"
                  disabled={currentSizeIndex === 0}
                >
                  A-
                </button>
                <button 
                  onClick={increaseFontSize} 
                  className="btn btn-outline-light"
                  disabled={currentSizeIndex === fontSizes.length - 1}
                >
                  A+
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;