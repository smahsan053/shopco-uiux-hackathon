"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

function ProductQuantity() {
  const [value, setValue] = useState(0);

  const handleDecrement = () => {
    setValue((prevState) => (prevState > 0 ? prevState - 1 : prevState));
  };
  const handleIncrement = () => {
    setValue((prevState) => prevState + 1);
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (value <= 0) setValue(0);
    setValue(
      Number.parseInt(e.target.value) > 0 ? Number.parseInt(e.target.value) : 0
    );
  };
  return (
    <div className="flex flex-row bg-[#F0F0F0] rounded-full">
      <Button
        variant={"secondary"}
        className="bg-[#F0F0F0] rounded-l-full"
        onClick={handleDecrement}
        disabled={value < 0}
      >
        -
      </Button>
      <input
        type="text"
        className="w-10 bg-transparent outline-none text-center"
        value={value}
        onChange={handleChange}
        disabled={value < 0}
      />
      <Button
        variant={"secondary"}
        className="bg-[#F0F0F0] rounded-r-full"
        onClick={handleIncrement}
        disabled={value < 0}
      >
        +
      </Button>
    </div>
  );
}

export default ProductQuantity;
