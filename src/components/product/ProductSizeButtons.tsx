"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import useCartStore from "@/store/CartStore";

function ProductSizeButtons({ sizes }: { sizes: string[] }) {
  const [bg, setBg] = useState(sizes[0].toLowerCase());
  const setSize = useCartStore((state) => state.setSize);

  useEffect(() => setSize(bg.toUpperCase()), [setSize, bg]);

  const handleClick = (btnText: string) => {
    setBg(btnText);
  };
  return (
    <div className="flex gap-4">
      {sizes.map((size, index) => (
        <Button
          variant={"secondary"}
          className={`rounded-full px-6 py-3 text-base ${
            bg === size.toLowerCase()
              ? `bg-black text-white hover:bg-black hover:text-white`
              : ""
          }`}
          onClick={() => {
            handleClick(size.toLowerCase());
          }}
          key={index}
        >
          {size}
        </Button>
      ))}
    </div>
  );
}

export default ProductSizeButtons;
