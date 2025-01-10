"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";

function ProductSizeButtons() {
  const [bg, setBg] = useState("");
  const handleClick = (btnText: string) => {
    setBg(btnText);
  };
  return (
    <div className="flex gap-4">
      <Button
        variant={"secondary"}
        className={`rounded-full px-6 py-3 text-base ${
          bg === "sm"
            ? `bg-black text-white hover:bg-black hover:text-white`
            : ""
        }`}
        onClick={() => {
          handleClick("sm");
        }}
      >
        Small
      </Button>
      <Button
        variant={"secondary"}
        className={`rounded-full px-6 py-3 text-base ${
          bg === "md"
            ? `bg-black text-white hover:bg-black hover:text-white`
            : ""
        }`}
        onClick={() => {
          handleClick("md");
        }}
      >
        Medium
      </Button>
      <Button
        variant={"secondary"}
        className={`rounded-full px-6 py-3 text-base ${
          bg === "lg"
            ? `bg-black text-white hover:bg-black hover:text-white`
            : ""
        }`}
        onClick={() => {
          handleClick("lg");
        }}
      >
        Large
      </Button>
      <Button
        variant={"secondary"}
        className={`rounded-full px-6 py-3 text-base ${
          bg === "xl"
            ? `bg-black text-white hover:bg-black hover:text-white`
            : ""
        }`}
        onClick={() => {
          handleClick("xl");
        }}
      >
        X-Large
      </Button>
    </div>
  );
}

export default ProductSizeButtons;
