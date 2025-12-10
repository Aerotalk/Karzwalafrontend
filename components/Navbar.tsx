"use client";

import Image from "next/image";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="w-full border-b border-orange-100">
      {/* Top strip */}
      <div className="bg-white text-xs text-slate-600 border-b border-orange-100">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2">
          <button className="inline-flex items-center gap-2">
            <span className="text-orange-500">☎</span>
            <span className="font-medium text-slate-700">+91 9876543210</span>
          </button>
          <nav className="hidden md:flex items-center gap-6">
            <button className="hover:text-orange-500 transition-colors">
              Investors relation
            </button>
            <button className="hover:text-orange-500 transition-colors">
              Track loan
            </button>
            <button className="hover:text-orange-500 transition-colors">
              Enquire now
            </button>
            <button className="hover:text-orange-500 transition-colors">
              Career
            </button>
          </nav>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-orange-500 text-white">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
          {/* Logo */}
          <Image
            src="/logo.png"
            alt="Company Logo"
            width={150}
            height={40}
            className="object-contain w-fit bg-white rounded-md p-1"
         />

          {/* Center nav links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <button className="inline-flex items-center gap-1">
              Personal loan <span className="text-xs">▾</span>
            </button>
            <button>MSME loan</button>
            <button className="inline-flex items-center gap-1">
              Loan calculators <span className="text-xs">▾</span>
            </button>
            <button className="inline-flex items-center gap-1">
              Learn <span className="text-xs">▾</span>
            </button>
            <button>Contact us</button>
          </nav>

          {/* Right buttons */}
          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center justify-center px-5 py-2 rounded-full bg-white text-orange-500 text-sm font-semibold shadow-sm">
              Login
            </button>
            <button className="inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#ffebd2] text-orange-600 text-sm font-semibold shadow-sm border border-orange-100">
              Apply now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
