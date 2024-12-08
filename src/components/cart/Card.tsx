import Image from "next/image";
import React from "react";
interface PropType {
  name: string;
  size: string;
  color: string;
  price: string;
  imagesrc: string;
}
function Card(props: PropType) {
  return (
    <div className="flex flex-row justify-between items-center">
      <div className="flex items-center gap-4 mt-5 ml-5 ">
        <Image
          src={`/item/${props.imagesrc}.png`}
          alt="gradienttshirt"
          width={124}
          height={124}
          className="rounded-md"
        />
        <div>
          <h1 className="font-bold text-xl">{props.name}</h1>
          <div className="font-normal text-sm flex justify-start items-center gap-1">
            <h4>Size:</h4>
            <span className="opacity-60">{props.color}</span>
          </div>
          <div className="font-normal text-sm flex justify-start items-center gap-1">
            <h4>Color:</h4>
            <span className="opacity-60">{props.color}</span>
          </div>
          <h1 className="font-bold text-2xl">{props.price}</h1>
        </div>
      </div>
      <div className="flex flex-col justify-end items-end gap-16 mr-5 mt-5">
        <Image src={"/cart/trash.png"} alt="trash" width={24} height={24} />
        <div className="bg-[#F0F0F0] px-5 py-3 rounded-full w-32 h-11 flex justify-around items-center">
          <h1>+</h1>
          <h1>1</h1>
          <h1>-</h1>
        </div>
      </div>
    </div>
  );
}

export default Card;
