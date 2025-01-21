"use client";
import Image from "next/image";
import React from "react";
import StarRating from "../feedback/StarRating";
import ProductSizeButtons from "./ProductSizeButtons";
import ColorSelector from "./ColorSelector";
import ProductQuantity from "./ProductQuantity";
import useCartStore from "@/store/CartStore";
import { CATALOG_QUERYResult } from "sanity.types";
import { urlFor } from "@/sanity/lib/image";

function Product({ product }: { product: CATALOG_QUERYResult[0] }) {
  const addCartItem = useCartStore((state) => state.addCartItem);
  const color = useCartStore((state) => state.color);
  const size = useCartStore((state) => state.size);

  const { cartItems } = useCartStore();
  console.log(cartItems);
  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around xl:justify-between gap-4 lg:gap-8 mb-12 mt-6 ">
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-8">
        <div className="flex flex-row lg:flex-col gap-1 lg:gap-4 order-2 lg:order-1 ">
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image
              src={urlFor(product.imageUrl!).url()}
              alt="image2"
              width={152}
              height={167}
            />
          </div>
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image
              src={urlFor(product.imageUrl!).url()}
              alt="image3"
              width={152}
              height={167}
            />
          </div>
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image
              src={urlFor(product.imageUrl!).url()}
              alt="image4"
              width={152}
              height={167}
            />
          </div>
        </div>
        <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center order-1 lg:order-2">
          <Image
            src={urlFor(product.imageUrl!).url()}
            alt="image5"
            width={444}
            height={530}
          />
        </div>
      </div>

      <div className="relative xl:right-20 flex w-screen lg:w-[36%] flex-col items-start justify-center gap-0.5 ml-12">
        <h1
          className={`text-2xl md:text-4xl font-bold text-wrap md:text-nowrap font-integralcf`}
        >
          {product.name}
        </h1>
        <div className="flex gap-2 items-center justify-start mb-2 mt-1">
          <StarRating rating={product.rating!} />
          {product.rating}/5
        </div>
        <div className="flex items-center gap-4">
          <h3
            className={` font-bold text-3xl leading-6`}
            style={{ letterSpacing: "3%" }}
          >
            $
            {product.discountPercent! > 0
              ? product.price! -
                Math.ceil((product.price! * product.discountPercent!) / 100)
              : product.price}
          </h3>
          <h3
            className={` font-bold text-3xl leading-6 line-through opacity-30 ${product.discountPercent! > 0 ? "" : "hidden"}`}
            style={{ letterSpacing: "3%" }}
          >
            ${product.price}
          </h3>
          {product.discountPercent! > 0 ? (
            <div className="bg-red-300 px-4 py-1 text-red-700 rounded-full">
              {product.discountPercent!}%
            </div>
          ) : (
            ""
          )}
        </div>
        <p
          className={` font-normal text-sm leading-5 text-text2 mt-3 mb-3 text-center lg:text-start opacity-60 w-[90%]`}
        >
          {product.description}
        </p>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex flex-col items-start gap-2 mb-3">
          <h3
            className={` font-normal text-base mr-3 opacity-60`}
            style={{ letterSpacing: "3%" }}
          >
            Select Colors:{" "}
          </h3>
          <ColorSelector colors={product.colors!} />
        </div>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex flex-col gap-6 mb-3">
          <h3
            className={` font-normal text-base mr-3 opacity-60`}
            style={{ letterSpacing: "3%" }}
          >
            Choose Size{" "}
          </h3>
          <ProductSizeButtons sizes={product.sizes!} />
        </div>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex justify-center items-center gap-6">
          <ProductQuantity product={product} />
          <button
            onClick={() => {
              addCartItem(product, size, color);
            }}
            className="bg-black text-white rounded-full w-72 lg:w-[340px] h-[52px]"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
