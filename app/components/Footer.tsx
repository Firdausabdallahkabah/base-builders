
import React from 'react';
import BaseLogo from './BaseLogo';

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <BaseLogo className="mb-4 md:mb-0" />
          
          <div className="text-sm text-gray-500">
            <div className="flex gap-6 mb-4">
              <a href="#" className="hover:text-base-blue transition-colors">About</a>
              <a href="#" className="hover:text-base-blue transition-colors">Terms</a>
              <a href="#" className="hover:text-base-blue transition-colors">Privacy</a>
              <a href="#" className="hover:text-base-blue transition-colors">Support</a>
            </div>
            <p>© {new Date().getFullYear()} Base Buddy. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
