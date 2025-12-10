"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  const dropdownItems = {
    personal: [
      "Self-employed loan",
      "Salaried loan",
      "Wedding loan",
      "Loan for women",
      "Travel loan",
      "Debt consolidation",
    ],
    msme: [],
    calculators: ["EMI calculator", "Loan eligibility", "Loan comparison"],
    learn: ["About us", "Blogs & news"],
  }

  return (
    <>
      <div className="bg-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2 text-white">
              <span>🏢 +91 9876543210</span>
            </div>
            <div className="hidden sm:flex items-center gap-6 text-white text-sm">
              <a href="#" className="hover:opacity-80 transition">
                Investors relation
              </a>
              <span className="text-orange-700">|</span>
              <a href="#" className="hover:opacity-80 transition">
                Track loan
              </a>
              <span className="text-orange-700">|</span>
              <a href="#" className="hover:opacity-80 transition">
                Enquire now
              </a>
              <span className="text-orange-700">|</span>
              <a href="#" className="hover:opacity-80 transition">
                Career
              </a>
            </div>
          </div>
        </div>
      </div>

      <nav className="bg-white sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex-shrink-0 w-32">
              <Image
                src="/logo.png"
                alt="Krzwala"
                width={128}
                height={40}
                className="w-72 h-auto object-contain"
                />
            </div>

            <div className="hidden md:flex items-center justify-center flex-1 gap-8 px-8">
              <div className="relative group">
                <button
                  onMouseEnter={() => setOpenDropdown("personal")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="text-gray-800 font-medium hover:text-orange-600 transition flex items-center gap-1"
                >
                  Personal loan <span className="text-xs">▼</span>
                </button>
                {openDropdown === "personal" && (
                  <div
                    onMouseEnter={() => setOpenDropdown("personal")}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 w-max"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {dropdownItems.personal.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="px-4 py-2 rounded bg-orange-50 text-gray-800 hover:bg-orange-100 transition text-sm font-medium"
                        >
                          {item} →
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="text-gray-800 font-medium hover:text-orange-600 transition flex items-center gap-1">
                MSME loan <span className="text-xs">▼</span>
              </button>

              <div className="relative group">
                <button
                  onMouseEnter={() => setOpenDropdown("calculators")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="text-gray-800 font-medium hover:text-orange-600 transition flex items-center gap-1"
                >
                  Loan calculators <span className="text-xs">▼</span>
                </button>
                {openDropdown === "calculators" && (
                  <div
                    onMouseEnter={() => setOpenDropdown("calculators")}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 w-max"
                  >
                    <div className="grid grid-cols-3 gap-3">
                      {dropdownItems.calculators.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="px-4 py-2 rounded bg-orange-50 text-gray-800 hover:bg-orange-100 transition text-sm font-medium"
                        >
                          {item} →
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="relative group">
                <button
                  onMouseEnter={() => setOpenDropdown("learn")}
                  onMouseLeave={() => setOpenDropdown(null)}
                  className="text-gray-800 font-medium hover:text-orange-600 transition flex items-center gap-1"
                >
                  Learn <span className="text-xs">▼</span>
                </button>
                {openDropdown === "learn" && (
                  <div
                    onMouseEnter={() => setOpenDropdown("learn")}
                    onMouseLeave={() => setOpenDropdown(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-4 z-50 w-max"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      {dropdownItems.learn.map((item) => (
                        <a
                          key={item}
                          href="#"
                          className="px-4 py-2 rounded bg-orange-50 text-gray-800 hover:bg-orange-100 transition text-sm font-medium"
                        >
                          {item} →
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a href="#" className="text-gray-800 font-medium hover:text-orange-600 transition">
                Contact us
              </a>
            </div>

            <div className="hidden md:flex items-center gap-3">
              <button className="px-6 py-2 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition font-semibold text-sm">
                Login
              </button>
              <button className="px-6 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition font-semibold text-sm">
                Apply now
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-gray-800 p-2">
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden pb-4 border-t border-gray-200">
              <div className="flex flex-col gap-2 text-gray-800 py-4">
                <a href="#" className="hover:text-orange-600 transition px-4 py-2 font-medium">
                  Personal loan
                </a>
                <a href="#" className="hover:text-orange-600 transition px-4 py-2 font-medium">
                  MSME loan
                </a>
                <a href="#" className="hover:text-orange-600 transition px-4 py-2 font-medium">
                  Loan calculators
                </a>
                <a href="#" className="hover:text-orange-600 transition px-4 py-2 font-medium">
                  Learn
                </a>
                <a href="#" className="hover:text-orange-600 transition px-4 py-2 font-medium">
                  Contact us
                </a>
                <div className="flex gap-2 px-4 pt-4">
                  <button className="flex-1 px-4 py-2 border-2 border-orange-600 text-orange-600 rounded-full hover:bg-orange-50 transition font-semibold text-sm">
                    Login
                  </button>
                  <button className="flex-1 px-4 py-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition font-semibold text-sm">
                    Apply now
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
