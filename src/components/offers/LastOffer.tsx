import React from "react";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import { TfiEmail } from "react-icons/tfi";

function LastOffer() {
  return (
    <Container className="bg-black h-72 md:h-44 rounded-3xl flex flex-col md:flex-row items-center justify-around">
      <h1 className="font-bold font-integralcf text-3xl md:text-4xl text-white text-wrap text-center md:text-start md:w-[50%]">
        STAY UPTO DATE ABOUT OUR LATEST OFFERS
      </h1>
      <div className="flex flex-col gap-4 w-full md:w-80 lg:w-96 relative">
        <label htmlFor="email" className="absolute top-4 left-3">
          <TfiEmail className="text-gray-500 font-bold" />
        </label>
        <input
          id="email"
          name="email"
          type="text"
          placeholder="Enter your email address"
          className="py-3 px-10 w-full rounded-full bg-white"
        />
        <Button variant={"outline"} className="rounded-full">
          Subscribe to Newsletter{" "}
        </Button>
      </div>
    </Container>
  );
}

export default LastOffer;
