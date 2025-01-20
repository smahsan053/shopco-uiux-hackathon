"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Check } from "lucide-react";
import useCartStore from "@/store/CartStore";

function ColorSelector({ colors }: { colors: string[] }) {
  // console.log(id);

  const [tick, setTick] = useState(colors[0]);
  const setColor = useCartStore((state) => state.setColor);
  useEffect(() => setColor(tick), [setColor, tick]);

  const handleClick = (color: string) => {
    setTick(color);
  };
  return (
    <div className="flex gap-2 items-center justify-start">
      {colors.map((color, index) => (
        <Button
          className={`rounded-full w-10 h-10 border border-black`}
          style={{ backgroundColor: color }}
          onClick={() => {
            handleClick(color);
          }}
          key={index}
        >
          {tick === color ? (
            <Check
              className={
                color === "Yellow" || color === "White"
                  ? "text-black"
                  : "text-white"
              }
            />
          ) : (
            ""
          )}
        </Button>
      ))}
    </div>
  );
}

export default ColorSelector;
