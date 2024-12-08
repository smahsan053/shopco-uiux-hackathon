import Image from "next/image";
import React from "react";
import StarRating from "../feedback/StarRating";
interface PropType {
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  itemName: string;
  rating: number;
  discountedPrice: string;
  actualPrice: string;
  discountpercent?: string;
}
function Product(props: PropType) {
  return (
    <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-start justify-center lg:justify-around xl:justify-between gap-4 lg:gap-8 mb-12 ">
      <div className="relative flex flex-col lg:flex-row gap-2 xl:gap-8 xl:left-20 2xl:left-40">
        <div className="flex flex-row lg:flex-col gap-1 lg:gap-4 order-2 lg:order-1 ">
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image src={props.image2} alt="image2" width={152} height={167} />
          </div>
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image src={props.image3} alt="image3" width={152} height={167} />
          </div>
          <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center">
            <Image src={props.image4} alt="image4" width={152} height={167} />
          </div>
        </div>
        <div className="bg-[#F0EEED] rounded-2xl flex justify-center items-center order-1 lg:order-2">
          <Image src={props.image1} alt="image5" width={444} height={530} />
        </div>
      </div>

      <div className="relative xl:right-20 flex w-screen lg:w-[36%] flex-col items-start justify-center gap-2 ml-12">
        <h1 className={`text-4xl font-bold text-nowrap`}>{props.itemName}</h1>
        <div className="flex gap-2 items-center justify-start mb-2 mt-1">
          <StarRating rating={props.rating} />
          {props.rating}/5
        </div>
        <div className="flex items-center gap-4">
          <h3
            className={` font-bold text-3xl leading-6`}
            style={{ letterSpacing: "3%" }}
          >
            {props.discountedPrice}
          </h3>
          <h3
            className={` font-bold text-3xl leading-6 line-through opacity-30`}
            style={{ letterSpacing: "3%" }}
          >
            {props.actualPrice}
          </h3>
          {props.discountpercent ? (
            <div className="bg-red-300 px-4 py-1 text-red-700 rounded-full">
              {props.discountpercent}
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
          <div className="flex gap-2 items-center justify-start">
            <div className="rounded-full w-5 h-5 bg-[#4F4631] border border-black"></div>
            <div className="rounded-full w-5 h-5 bg-[#314F4A] border border-black"></div>
            <div className="rounded-full w-5 h-5 bg-[#31344F] border border-black"></div>
          </div>
        </div>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex flex-col gap-6 mb-3">
          <h3
            className={` font-normal text-base mr-3 opacity-60`}
            style={{ letterSpacing: "3%" }}
          >
            Choose Size{" "}
          </h3>
          <div className="flex gap-4">
            <div
              className={`px-6 py-3 w-24 h-12 rounded-full text-base opacity-60 font-medium  flex justify-center items-center bg-[#F0F0F0] cursor-pointer text-nowrap`}
            >
              Small
            </div>
            <div
              className={`px-6 py-3 w-24 h-12 rounded-full text-base opacity-60 font-medium  flex justify-center items-center bg-[#F0F0F0] cursor-pointer text-nowrap`}
            >
              Medium
            </div>
            <div
              className={`px-6 py-3 w-24 h-12 rounded-full text-base font-medium  flex justify-center items-center bg-black text-white cursor-pointer text-nowrap`}
            >
              Large
            </div>
            <div
              className={`px-6 py-3 w-24 h-12 rounded-full text-base opacity-60 font-medium  flex justify-center items-center bg-[#F0F0F0] cursor-pointer text-nowrap`}
            >
              X-Large
            </div>
          </div>
        </div>
        <div className="border-t border-black border-opacity-50 w-[90%] pb-4"></div>
        <div className="flex justify-center items-center gap-6">
          <div className="bg-[#F0F0F0] px-5 py-3 rounded-full w-32 h-11 flex justify-around items-center">
            <h1>+</h1>
            <h1>1</h1>
            <h1>-</h1>
          </div>
          <button className="bg-black text-white rounded-full w-72 lg:w-[340px] h-[52px]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
