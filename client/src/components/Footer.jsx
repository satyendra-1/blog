import React from 'react'
import { assets, footer_data } from '../assets/assets'
const Footer = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3">
      
      {/* Main Footer Container */}
      <div className="flex flex-col md:flex-row justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500">
        
        {/* Logo and Description */}
        <div className="md:w-1/3">
          <img src={assets.logo} alt="logo" className="w-32 md:w-44" />
          
          {/* ✅ FIX: missing closing bracket in className */}
          <p className="max-w-[410px] mt-6">jnowncionqo</p>
        </div>

        {/* Footer Links Section */}
        <div className="flex flex-wrap justify-between md:w-2/3 gap-8">
          {footer_data.map((section, index) => (
            <div key={index} className="min-w-[120px]">
              <h3 className="font-semibold text-base text-gray-900 md:mb-5 mb-2">
                {section.title}
              </h3>
              <ul className="text-sm space-y-1">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a href="#" className="hover:underline transition">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Footer;
