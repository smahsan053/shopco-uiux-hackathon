import Image from "next/image";
import React from "react";
import ProductQuantity from "../product/ProductQuantity";
import { Trash2 } from "lucide-react";
import { Item } from "@/app/shop/[id]/page";
import useCartStore from "@/store/CartStore";

function Card({ product }: { product: Item }) {
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  return (
    <div className="flex w-full p-4">
      <div className="flex flex-row items-center justify-around gap-4 w-full">
        <Image
          src={`${product.image1}`}
          alt="gradienttshirt"
          width={124}
          height={124}
          className="rounded-md"
        />
        <div className="flex flex-row w-full justify-between items-center h-full">
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-bold text-base md:text-xl capitalize text-wrap">
              {product.itemName}
            </h1>
            <div className="font-normal text-sm flex justify-start items-center gap-1">
              <h4>Size:</h4>
              <span className="opacity-60">{"white"}</span>
            </div>
            <div className="font-normal text-sm flex justify-start items-center gap-1">
              <h4>Color:</h4>
              <span className="opacity-60">{"white"}</span>
            </div>
            <h1 className="font-bold text-2xl">
              $
              {product.discountedPrice
                ? product.discountedPrice
                : product.actualPrice}
            </h1>
          </div>
          <div className="flex flex-col items-end justify-between h-full">
            <Trash2
              className="text-red-500 cursor-pointer"
              onClick={() => removeCartItem(product.id)}
            />
            <ProductQuantity product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
