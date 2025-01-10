"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";

function ColorSelector() {
  const [tick, setTick] = useState("");
  const handleClick = (color: string) => {
    setTick(color);
  };
  return (
    <div className="flex gap-2 items-center justify-start">
      <Button
        className={`rounded-full w-10 h-10 bg-[#4F4631] border border-black`}
        onClick={() => {
          handleClick("4F4631");
        }}
      >
        {tick === "4F4631" ? <Check /> : ""}
      </Button>
      <Button
        className="rounded-full w-10 h-10 bg-[#314F4A] border border-black"
        onClick={() => {
          handleClick("314F4A");
        }}
      >
        {" "}
        {tick === "314F4A" ? <Check /> : ""}
      </Button>
      <Button
        className="rounded-full w-10 h-10 bg-[#31344F] border border-black"
        onClick={() => {
          handleClick("31344F");
        }}
      >
        {" "}
        {tick === "31344F" ? <Check /> : ""}
      </Button>
    </div>
  );
}

export default ColorSelector;
