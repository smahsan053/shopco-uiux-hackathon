import Image from "next/image";
import React from "react";

function LastOffer() {
  return (
    <div className="flex  justify-center items-center">
      <div className="bg-black w-[84%] h-72 md:h-44 rounded-3xl flex flex-col md:flex-row items-center justify-around">
        <h1 className="font-bold text-3xl md:text-5xl text-white text-wrap text-center md:w-[50%]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row bg-white rounded-full px-4 py-3 w-80 gap-5">
            <Image src={"/offer/mail.png"} alt="mail" width={24} height={24} />
            <p className="font-normal text-base text-black opacity-40">
              Enter your email address
            </p>
          </div>
          <div className="flex flex-row items-center justify-center bg-white rounded-full px-4 py-3 w-80 gap-5">
            <p className="font-normal text-base text-center text-black">
              Subscribe to Newsletter{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LastOffer;
