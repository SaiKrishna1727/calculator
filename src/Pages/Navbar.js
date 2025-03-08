import React from 'react';

const Navbar = () => {
  return (
    <nav className="relative w-full md:w-3/5 lg:w-2/5 bg-[#1E1E2E] rounded-full shadow-md p-3 mx-2 flex items-center justify-center">
      <div className="relative w-full flex items-center justify-center">
        {/* Logo Positioned in the Middle */}
        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#2A2A3B] px-5 py-2 text-[#EAEAEA] text-3xl md:text-4xl font-bold rounded-full shadow-lg">
          CalBuddy
        </h1>

        <ul className="flex justify-between w-full px-6 md:px-10">
          <li>
            <a href="#home" className="text-[#EAEAEA] text-base md:text-lg hover:text-[#FFD700] transition duration-300">
              Calculators
            </a>
          </li>
          <li>
            <a href="#about" className="text-[#EAEAEA] text-base md:text-lg hover:text-[#FFD700] transition duration-300">
              Convertors
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
