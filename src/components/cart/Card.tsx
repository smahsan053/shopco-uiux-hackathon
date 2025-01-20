import Image from "next/image";
import React from "react";
import ProductQuantity from "../product/ProductQuantity";
import { Trash2 } from "lucide-react";
import useCartStore from "@/store/CartStore";
import { CATALOG_QUERYResult } from "sanity.types";
import { urlFor } from "@/sanity/lib/image";

function Card({ product }: { product: CATALOG_QUERYResult[0] }) {
  const removeCartItem = useCartStore((state) => state.removeCartItem);
  const cartItems = useCartStore((state) => state.cartItems);

  return (
    <div className="flex w-full p-4">
      <div className="flex flex-row items-center justify-around gap-4 w-full">
        <Image
          src={`${urlFor(product.imageUrl!).url()}`}
          alt="gradienttshirt"
          width={124}
          height={124}
          className="rounded-md"
        />
        <div className="flex flex-row w-full justify-between items-center h-full">
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-bold text-base md:text-xl capitalize text-wrap">
              {product.name}
            </h1>
            <div className="font-normal text-sm flex justify-start items-center gap-1">
              <h4>Size:</h4>
              <span className="opacity-60">
                {cartItems.map((item) =>
                  item.product._id === product._id ? item.sizes.join(",") : null
                )}
              </span>
            </div>
            <div className="font-normal text-sm flex justify-start items-center gap-1">
              <h4>Color:</h4>
              <span className="opacity-60">
                {cartItems.map((item) =>
                  item.product._id === product._id
                    ? item.colors.join(",")
                    : null
                )}
              </span>
            </div>
            <h1 className="font-bold text-2xl">
              $
              {product.discountPercent! > 0
                ? product.price! -
                  Math.ceil(product.price! * (product.discountPercent! / 100))
                : product.price}
            </h1>
          </div>
          <div className="flex flex-col items-end justify-between h-full">
            <Trash2
              className="text-red-500 cursor-pointer"
              onClick={() => removeCartItem(product._id)}
            />
            <ProductQuantity product={product} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
