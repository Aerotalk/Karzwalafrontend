"use client"

import Image from "next/image"

export function FeaturesSection() {
  const loanProducts = [
    {
      id: 1,
      title: "Self-employed loan",
      icon: "/Self-employed loan.png",
    },
    {
      id: 2,
      title: "Salaried loan",
      icon: "/money.png",
    },
    {
      id: 3,
      title: "Wedding loan",
      icon: "/wedding.png",
    },
    {
      id: 4,
      title: "Loan for women",
      icon: "/women.png",
    },
    {
      id: 5,
      title: "Travel loan",
      icon: "/travel.png",
    },
    {
      id: 6,
      title: "Debt consolidation loan",
      icon: "/debt.png",
    },
    {
      id: 7,
      title: "MSME loan",
      icon: "/msme.png",
    },
  ]

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Explore all our <span className="text-orange-600">loan product</span>
          </h2>
          <p className="mt-4 text-gray-600 text-lg">Our instant loan process is designed for speed and convenience</p>
        </div>

        {/* Loan Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {loanProducts.slice(0, 4).map((product) => (
            <div key={product.id} className="flex flex-col h-full">
              <div
                className="bg-[#FFF3EA] rounded-t-2xl p-8 md:p-10 flex flex-col items-center justify-center flex-1"
              >
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={64}
                  height={64}
                  className="object-contain" />
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-b-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
                {product.title} <span>→</span>
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Row - 3 Products Centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:mx-auto lg:max-w-4xl">
          {loanProducts.slice(4).map((product) => (
            <div key={product.id} className="flex flex-col h-full">
              <div
                className="bg-[#FFF3EA] rounded-t-2xl p-8 md:p-10 flex flex-col items-center justify-center flex-1">
                <Image
                  src={product.icon}
                  alt={product.title}
                  width={64}
                  height={64}
                  className="object-contain" />
              </div>
              <button className="w-full bg-orange-600 text-white py-3 rounded-b-lg font-semibold hover:bg-orange-700 transition flex items-center justify-center gap-2">
                {product.title} <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
