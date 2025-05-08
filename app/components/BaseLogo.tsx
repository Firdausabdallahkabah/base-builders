
import React from 'react';

interface BaseLogoProps {
  className?: string;
}

const BaseLogo = ({ className = "" }: BaseLogoProps) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0052FF"/>
        <path d="M12.3696 5.33331H8.08267V18.6667H12.3696C16.3428 18.6667 19.2003 16.0795 19.2003 12C19.2003 7.92048 16.3428 5.33331 12.3696 5.33331Z" fill="white"/>
        <path d="M5.33333 5.33331H8.08267V18.6667H5.33333V5.33331Z" fill="white"/>
      </svg>
      <span className="font-bold text-xl text-[#4D8AFF]">Base Buddy</span>
    </div>
  );
};

export default BaseLogo;
