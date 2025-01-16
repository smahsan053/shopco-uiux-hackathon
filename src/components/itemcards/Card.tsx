import Image from "next/image";
import React from "react";
import Link from "next/link";
import StarRating from "../feedback/StarRating";
import { Item } from "@/app/shop/[id]/page";

function Card({ product }: { product: Item }) {
  return (
    product && (
      <Link href={`/shop/${product.id}`} className="cursor-pointer mb-2 w-full">
        <div className="group relative p-4 lg:p-0 bg-[#F0EEED] rounded-2xl flex justify-center items-center xl:w-[295px] xl:h-[298px] w-[198px] h-[200px]">
          <Image
            src={product.image1}
            alt={`${product.itemName?.split(" ").join("").toLowerCase()}`}
            width={172}
            height={152}
            className="object-scale-down lg:h-auto h-28 hover:scale-125 transition-all duration-700"
          />
        </div>
        <div className={`flex flex-col gap-1 `}>
          <p className="font-medium text-base leading-6 line-clamp-1">
            {product.itemName}
          </p>
          <div className={`flex flex-col gap-1`}>
            <div className="flex flex-row items-center gap-2">
              <StarRating rating={product.rating} />
              {product.rating}/5
            </div>
            <div className="font-medium text-base leading-6 flex gap-3 items-center">
              <span>
                $
                {product.discountedPrice
                  ? product.discountedPrice
                  : product.actualPrice}
              </span>
              <span
                className={`text-text2 opacity-50 ${product.discountedPrice ? "line-through" : "hidden"}`}
              >
                ${product.actualPrice}
              </span>
              {product.discountpercent ? (
                <div className="bg-red-300 px-4 text-sm py-0.5 text-red-700 rounded-full">
                  {product.discountpercent}%
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </Link>
    )
  );
}

export default Card;
