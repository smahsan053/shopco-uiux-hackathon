"use client";
import { BreadCrumb } from "@/components/BreadCrumb";
import Card from "@/components/cart/Card";
import { Button } from "@/components/ui/button";
import Container from "@/components/ui/Container";
import { MoveRight, ShoppingBasket } from "lucide-react";
import React from "react";
import useCartStore from "@/store/CartStore";
import Link from "next/link";

function Cart() {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = useCartStore((state) => state.getTotalPrice());
  const totalDiscount = Math.ceil(totalPrice * 0.2);
  console.log(cartItems);

  return (
    <Container>
      <BreadCrumb location={["Home", "Cart"]} />
      {cartItems.length > 0 ? (
        <>
          <h1 className="font-bold font-integralcf text-4xl my-6">Your cart</h1>
          <div className="flex flex-col lg:flex-row gap-5 mb-10">
            <div className="border border-black lg:w-[715px] rounded-2xl h-full">
              {cartItems.map((item, index) => (
                <div key={item.product._id}>
                  <Card product={item.product} />
                  <div
                    className={`border-t ${cartItems.length === index + 1 ? "hidden" : ""}`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="border border-black lg:w-[505px] h-[458px] rounded-2xl flex flex-col gap-6 px-4">
              <h1 className="font-bold text-2xl mt-5">Order Summary</h1>
              <div className="flex justify-between">
                <h2 className="font-normal text-xl opacity-60">Subtotal</h2>
                <h2 className="font-bold text-xl">${totalPrice}</h2>
              </div>
              <div className="flex justify-between">
                <h2 className="font-normal text-xl opacity-60">
                  Discount (-20%)
                </h2>
                <h2 className="font-bold text-xl text-red-500">
                  -${totalDiscount}
                </h2>
              </div>
              <div className="flex justify-between">
                <h2 className="font-normal text-xl opacity-60">Delivery Fee</h2>
                <h2 className="font-bold text-xl">$15</h2>
              </div>
              <div className="border-t"></div>
              <div className="flex justify-between">
                <h2 className="font-normal text-xl ">Total</h2>
                <h2 className="font-bold text-xl">
                  ${totalPrice - totalDiscount - 15}
                </h2>
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
        </>
      ) : (
        <div className=" text-xl text-gray-400 flex flex-col items-center justify-center h-full gap-6">
          <ShoppingBasket className="text-gray-300" size={200} />
          <h1 className="h-full">Your shopping cart is empty.</h1>
          <Button>
            <Link href={"/shop"} className="px-6 rounded-full py-1">
              Shop
            </Link>
          </Button>
        </div>
      )}
    </Container>
  );
}

export default Cart;
