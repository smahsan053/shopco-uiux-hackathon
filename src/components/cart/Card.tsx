import Image from "next/image";
import React from "react";
import ProductQuantity from "../product/ProductQuantity";
import { Trash2 } from "lucide-react";
interface PropType {
  name: string;
  size: string;
  color: string;
  price: number;
  imagesrc: string;
}

function Card(props: PropType) {
  return (
    <div className="flex w-full h-40 p-4">
      <div className="flex flex-row items-center justify-around gap-4 w-full">
        <Image
          src={`/item/${props.imagesrc}.png`}
          alt="gradienttshirt"
          width={124}
          height={124}
          className="rounded-md"
        />
        <div className="flex flex-row w-full justify-between items-center h-full">
          <div className="flex flex-col justify-between h-full">
            <h1 className="font-bold text-base md:text-xl capitalize text-wrap">
              {props.name}
            </h1>
            <div className="font-normal text-sm flex justify-start items-center gap-1">
              <h4>Size:</h4>
              <span className="opacity-60">{props.color}</span>
            </div>
            <div className="font-normal text-sm flex justify-start items-center gap-1">
              <h4>Color:</h4>
              <span className="opacity-60">{props.color}</span>
            </div>
            <h1 className="font-bold text-2xl">${props.price}</h1>
          </div>
          <div className="flex flex-col items-end justify-between h-full">
            <Trash2 className="text-red-500 cursor-pointer" />
            <ProductQuantity />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
