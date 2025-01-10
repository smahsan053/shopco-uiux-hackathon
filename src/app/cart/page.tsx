import { BreadCrumb } from "@/components/BreadCrumb";
import Card from "@/components/cart/Card";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { MoveRight } from "lucide-react";
import React from "react";

function Cart() {
  return (
    <Container>
      <BreadCrumb location={["Home", "Cart"]} />
      <h1 className="font-bold font-integralcf text-4xl my-6">Your cart</h1>
      <div className="flex flex-col lg:flex-row gap-5 mb-10">
        <div className="border border-black lg:w-[715px] h-[508px] rounded-2xl">
          <Card
            name="Gradient Graphic T-shirt"
            size="Large"
            color="White"
            price={140}
            imagesrc="gradienttshirt"
          />
          <div className="border-t"></div>
          <Card
            name="Checkered shirt"
            size="Medium"
            color="Red"
            price={180}
            imagesrc="chekeredshirt"
          />
          <div className="border-t"></div>
          <Card
            name="Skinny fit jeans"
            size="Large"
            color="Blue"
            price={240}
            imagesrc="jeans"
          />
        </div>
        <div className="border border-black lg:w-[505px] h-[458px] rounded-2xl flex flex-col gap-6 px-4">
          <h1 className="font-bold text-2xl mt-5">Order Summary</h1>
          <div className="flex justify-between">
            <h2 className="font-normal text-xl opacity-60">Subtotal</h2>
            <h2 className="font-bold text-xl">$565</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-normal text-xl opacity-60">Discount (-20%)</h2>
            <h2 className="font-bold text-xl text-red-500">-$113</h2>
          </div>
          <div className="flex justify-between">
            <h2 className="font-normal text-xl opacity-60">Delivery Fee</h2>
            <h2 className="font-bold text-xl">$15</h2>
          </div>
          <div className="border-t"></div>
          <div className="flex justify-between">
            <h2 className="font-normal text-xl ">Total</h2>
            <h2 className="font-bold text-xl">$467</h2>
          </div>
          <div className=" flex items-center justify-between gap-2">
            <input
              type="text"
              placeholder="Add promo code"
              className="px-10 py-3 text-sm border rounded-full focus:outline-none bg-[#F0F0F0] focus:ring-2 focus:ring-blue-500 w-80 "
            />
            <Button className="bg-black rounded-full text-white w-28 h-12">
              Apply
            </Button>
          </div>
          <Button className="bg-black flex justify-center gap-1 items-center h-14 rounded-full text-white">
            Go to Checkout
            <MoveRight />
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Cart;
