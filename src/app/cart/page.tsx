import { BreadCrumb } from "@/components/BreadCrumb";
import Card from "@/components/cart/Card";
import LastOffer from "@/components/offers/LastOffer";
import Image from "next/image";
import React from "react";

function Cart() {
  return (
    <div>
      <BreadCrumb location={["Home", "Cart"]} />
      <h1 className="w-[80%] mx-auto font-bold text-4xl my-6">Your cart</h1>
      <div className="w-[80%] mx-auto flex flex-col md:flex-row gap-5 mb-10">
        <div className="border border-black md:w-[715px] md:h-[508px] rounded-2xl">
          <Card
            name="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price="$140"
            imagesrc="gradienttshirt"
          />
          <div className="border-t mt-5"></div>
          <Card
            name="CHECKERED SHIRT"
            size="Medium"
            color="Red"
            price="$180"
            imagesrc="chekeredshirt"
          />
          <div className="border-t mt-5"></div>
          <Card
            name="SKINNY FIT JEANS"
            size="Large"
            color="Blue"
            price="$240"
            imagesrc="jeans"
          />
        </div>
        <div className="border border-black md:w-[505px] md:h-[458px] rounded-2xl flex flex-col gap-6">
          <h1 className="font-bold text-2xl mx-5 mt-5">Order Summary</h1>
          <div className="flex justify-between mx-5">
            <h2 className="font-normal text-xl opacity-60">Subtotal</h2>
            <h2 className="font-bold text-xl">$565</h2>
          </div>
          <div className="flex justify-between mx-5">
            <h2 className="font-normal text-xl opacity-60">Discount (-20%)</h2>
            <h2 className="font-bold text-xl text-red-500">-$113</h2>
          </div>
          <div className="flex justify-between mx-5">
            <h2 className="font-normal text-xl opacity-60">Delivery Fee</h2>
            <h2 className="font-bold text-xl">$15</h2>
          </div>
          <div className="border-t"></div>
          <div className="flex justify-between mx-5">
            <h2 className="font-normal text-xl ">Total</h2>
            <h2 className="font-bold text-xl">$467</h2>
          </div>
          <div className=" flex justify-center items-center space-x-5">
            <input
              type="text"
              placeholder="Add promo code"
              className="px-10 py-3 text-sm border rounded-full focus:outline-none bg-[#F0F0F0] focus:ring-2 focus:ring-blue-500 w-80 "
            />
            <button className="bg-black rounded-full text-white w-28 h-12">
              Apply
            </button>
          </div>
          <button className="bg-black flex justify-center items-center h-14 rounded-full text-white mx-5">
            Go to Checkout
            <Image
              src={"/cart/arrowdown.png"}
              alt="arowdown"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
      <LastOffer />
    </div>
  );
}

export default Cart;
