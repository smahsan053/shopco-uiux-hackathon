"use client";
import React from "react";
import { Button } from "../ui/button";
import useCartStore from "@/store/CartStore";
import { CATALOG_QUERYResult } from "sanity.types";

function ProductQuantity({ product }: { product: CATALOG_QUERYResult[0] }) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const reduceItemCount = useCartStore((state) => state.reduceItemCount);
  const cartItemsCount = useCartStore((state) =>
    state.cartItemsCount(product._id)
  );
  console.log(cartItemsCount);

  return (
    <div className="flex flex-row bg-[#F0F0F0] rounded-full">
      <Button
        variant={"secondary"}
        className="bg-[#F0F0F0] rounded-l-full"
        onClick={() => {
          reduceItemCount(product._id);
        }}
        disabled={cartItemsCount < 0}
      >
        -
      </Button>
      <input
        type="text"
        className="w-10 bg-transparent outline-none text-center"
        value={cartItemsCount}
        disabled={cartItemsCount < 0}
        readOnly
      />
      <Button
        variant={"secondary"}
        className="bg-[#F0F0F0] rounded-r-full"
        onClick={() => {
          addCartItem(product);
        }}
        disabled={cartItemsCount < 0}
      >
        +
      </Button>
    </div>
  );
}

export default ProductQuantity;
