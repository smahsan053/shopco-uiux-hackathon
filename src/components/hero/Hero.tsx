import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative flex flex-col bg-[#F2F0F1] ">
      <div className="flex flex-col md:flex-row md:gap-56">
        <div className="relative flex flex-col w-[95%] md:w-[560px] md:left-20 md:top-20 text-start space-y-4 mx-4">
          <h1 className="text-6xl font-bold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="font-normal text-base text-black opacity-60">
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <button className="rounded-full w-full md:w-48 bg-black text-white px-12 py-3">
            Shop Now
          </button>
        </div>
        <div className="md:hidden mt-6 flex flex-col justify-center items-center gap-4 mb-8">
          <div className="flex justify-center items-center gap-16">
            <div>
              <h1 className="font-bold text-2xl">200+</h1>
              <p className="font-normal text-xs opacity-60">
                International Brands
              </p>
            </div>
            <div className="border-l border-black opacity-10 h-24"></div>
            <div>
              <h1 className="font-bold text-2xl">2000+</h1>
              <p className="font-normal text-xs opacity-60">
                High-Quality Products
              </p>
            </div>
          </div>
          <div>
            <h1 className="font-bold text-2xl">30,000+</h1>
            <p className="font-normal text-xs opacity-60">Happy Customers </p>
          </div>
        </div>
        <div className="relative">
          <Image
            src="/hero/banner.png"
            alt="banner"
            width={600}
            height={300}
            className="relative top-0"
          />
          <div className="absolute right-10 md:right-20 top-10">
            <Image
              src={"/hero/decorator1.png"}
              alt="decorator"
              width={104}
              height={104}
            />
          </div>
          <div className="absolute right-96 md:right-[500px] top-48">
            <Image
              src={"/hero/decorator2.png"}
              alt="decorator"
              width={56}
              height={56}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="w-screen bg-black h-40 md:h-28 z-50 flex flex-col md:flex-row justify-center items-center md:gap-28">
          <div className="flex flex-row gap-6 md:gap-28 h-20">
            <Image
              src={"/hero/versace.png"}
              alt="versace"
              width={166}
              height={33}
              className="object-scale-down"
            />
            <Image
              src={"/hero/zara.png"}
              alt="zara"
              width={91}
              height={38}
              className="object-scale-down"
            />
            <Image
              src={"/hero/gucci.png"}
              alt="gucci"
              width={156}
              height={36}
              className="object-scale-down"
            />
          </div>
          <div className="flex flex-row gap-6 md:gap-28 h-20">
            <Image
              src={"/hero/prada.png"}
              alt="prada"
              width={194}
              height={32}
              className="object-scale-down"
            />
            <Image
              src={"/hero/calvinklein.png"}
              alt="calvinklein"
              width={206}
              height={33}
              className="object-scale-down"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
