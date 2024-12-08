import Image from "next/image";
import React from "react";

function TopHeader() {
  return (
    <div className="bg-[#000000] text-[#FFFFFF] w-screen h-[38px] text-sm font-normal flex justify-center items-center relative px-4">
      <div className="flex items-center justify-center gap-2 text-center">
        Sign up and get 20% off your first order.{" "}
        <span className="font-medium underline">Sign Up Now</span>
      </div>
      <Image
        aria-hidden
        src={"/header/cross.svg"}
        alt="cross"
        width={20}
        height={20}
        className="absolute md:right-6 lg:right-20 xl:right-40 hidden sm:block"
      />
    </div>
  );
}

export default TopHeader;
