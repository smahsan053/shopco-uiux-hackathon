"use client";
import Image from "next/image";
import React from "react";
import StarRating from "../feedback/StarRating";
import ProductSizeButtons from "./ProductSizeButtons";
import ColorSelector from "./ColorSelector";
import ProductQuantity from "./ProductQuantity";
import { Item } from "@/app/shop/[id]/page";
import useCartStore from "@/store/CartStore";

function Product({ product }: { product: Item }) {
  // const { addCartItem } = useCartStore();
  const addCartItem = useCartStore((state) => state.addCartItem);
  const { cartItems } = useCartStore();
  console.log(cartItems);

  return (
    <div className="w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around xl:justify-between gap-4 lg:gap-8 mb-12 ">
      <div className="flex flex-col lg:flex-row gap-2 xl:gap-8">
        <div className="flex flex-row lg:flex-col gap-1 lg:gap-4 order-2 lg:order-1 ">
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image src={product.image2} alt="image2" width={152} height={167} />
          </div>
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image src={product.image3} alt="image3" width={152} height={167} />
          </div>
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image src={product.image4} alt="image4" width={152} height={167} />
          </div>
        </div>
        <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center order-1 lg:order-2">
          <Image src={product.image1} alt="image5" width={444} height={530} />
        </div>
      </div>

      <div className="relative xl:right-20 flex w-screen lg:w-[36%] flex-col items-start justify-center gap-0.5 ml-12">
        <h1
          className={`text-2xl md:text-4xl font-bold text-wrap md:text-nowrap font-integralcf`}
        >
          {product.itemName}
        </h1>
        <div className="flex gap-2 items-center justify-start mb-2 mt-1">
          <StarRating rating={product.rating} />
          {product.rating}/5
        </div>
        <div className="flex items-center gap-4">
          <h3
            className={` font-bold text-3xl leading-6`}
            style={{ letterSpacing: "3%" }}
          >
            $
            {product.discountedPrice
              ? product.discountedPrice
              : product.actualPrice}
          </h3>
          <h3
            className={` font-bold text-3xl leading-6 line-through opacity-30 ${product.discountedPrice ? "" : "hidden"}`}
            style={{ letterSpacing: "3%" }}
          >
            ${product.actualPrice}
          </h3>
          {product.discountpercent ? (
            <div className="bg-red-300 px-4 py-1 text-red-700 rounded-full">
              {product.discountpercent}%
            </div>
          ) : (
            ""
          )}
        </div>
        <p
          className={` font-normal text-sm leading-5 text-text2 mt-3 mb-3 text-center lg:text-start opacity-60 w-[90%]`}
        >
          This graphic t-shirt which is perfect for any occasion. Crafted from a
          soft and breathable fabric, it offers superior comfort and style.
        </p>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex flex-col items-start gap-2 mb-3">
          <h3
            className={` font-normal text-base mr-3 opacity-60`}
            style={{ letterSpacing: "3%" }}
          >
            Select Colors:{" "}
          </h3>
          <ColorSelector />
        </div>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex flex-col gap-6 mb-3">
          <h3
            className={` font-normal text-base mr-3 opacity-60`}
            style={{ letterSpacing: "3%" }}
          >
            Choose Size{" "}
          </h3>
          <ProductSizeButtons />
        </div>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex justify-center items-center gap-6">
          <ProductQuantity product={product} />
          <button
            onClick={() => {
              addCartItem(product);
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
