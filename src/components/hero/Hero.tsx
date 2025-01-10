import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";

function Hero() {
  return (
    <div className="bg-[#F2F0F1] -z-50">
      <Container className="flex flex-col md:flex-row">
        <div className="flex flex-col flex-wrap flex-1 gap-4 lg:gap-8 max-w-xl my-12 md:my-4 lg:my-12">
          <div className="space-y-8 md:space-y-4 lg:space-y-8">
            {" "}
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-integralcf text-wrap">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="text-wrap">
              {" "}
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <Link href={"/shop"}>
              <Button className="rounded-full px-9 w-full md:w-auto mt-8">
                {" "}
                Shop Now
              </Button>
            </Link>
          </div>
          <div className="flex flex-col justify-start items-center sm:flex-row gap-8 md:gap-4 xl:gap-8">
            <div className="flex justify-center items-center flex-row gap-8 md:gap-4 xl:gap-8">
              <div>
                <h1 className="font-bold text-4xl md:text-2xl lg:text-4xl">
                  200+
                </h1>
                <p className="font-normal text-xs xl:text-base opacity-60 text-nowrap">
                  International Brands
                </p>
              </div>
              <div className="border-l border-black opacity-10 h-24 md:h-16 lg:h-24"></div>
              <div>
                <h1 className="font-bold text-4xl md:text-2xl lg:text-4xl">
                  2,000+
                </h1>
                <p className="font-normal text-xs xl:text-base opacity-60 text-nowrap">
                  High-Quality Products
                </p>
              </div>
            </div>
            <div className="border-l border-black opacity-10 h-24 md:h-16 lg:h-24 hidden sm:flex"></div>
            <div>
              <h1 className="font-bold text-4xl md:text-2xl lg:text-4xl">
                30,000+
              </h1>
              <p className="font-normal text-xs xl:text-base opacity-60 text-nowrap">
                Happy Customers{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-1 items-center justify-center relative">
          <Image
            src="/hero/banner.png"
            alt="banner"
            width={600}
            height={300}
            className="flex flex-shrink-0 min-w-[350px] object-cover"
          />
          <div
            className="absolute right-0 sm:right-4 lg:right-10 xl:right-20 top-2 sm:top-10 animate-spin-super-slow
          "
          >
            <Image
              src={"/hero/decorator1.png"}
              alt="decorator"
              width={104}
              height={104}
              className="md:scale-75 lg:scale-100 "
            />
          </div>
          <div className="absolute left-1 sm:left-6 lg:left-12 animate-spin-super-slow">
            <Image
              src={"/hero/decorator2.png"}
              alt="decorator"
              width={56}
              height={56}
              className="md:scale-75 lg:scale-100"
            />
          </div>
        </div>
      </Container>
      <div className="w-full bg-black ">
        <Container className="flex flex-col md:flex-row md:h-36 h-32 justify-center items-center gap-4 md:gap-8 lg:gap-20 xl:gap-32">
          <div className="flex gap-8 lg:gap-20 xl:gap-32">
            <Image
              src={"/hero/versace.png"}
              alt="versace"
              width={150}
              height={33}
              className="object-scale-down"
            />
            <Image
              src={"/hero/zara.png"}
              alt="zara"
              width={80}
              height={38}
              className="object-scale-down"
            />
            <Image
              src={"/hero/gucci.png"}
              alt="gucci"
              width={140}
              height={36}
              className="object-scale-down"
            />
          </div>
          <div className="flex gap-6 lg:gap-20 xl:gap-32">
            <Image
              src={"/hero/prada.png"}
              alt="prada"
              width={164}
              height={32}
              className="object-scale-down"
            />
            <Image
              src={"/hero/calvinklein.png"}
              alt="calvinklein"
              width={180}
              height={33}
              className="object-scale-down"
            />
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
