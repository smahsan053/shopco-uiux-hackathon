import Image from "next/image";
import React from "react";
import Link from "next/link";
import StarRating from "../feedback/StarRating";
interface PropType {
  id: string;
  itemImageLink: string;
  itemName: string;
  actualPrice?: string;
  discountedPrice: string;
  rating: number;
  discount?: string;
}
// className="absolute top-4 right-4 space-y-2"
function Card(props: PropType) {
  return (
    <Link
      href={`/shop/${props.id}`}
      className="cursor-pointer mb-2 w-full"
    >
      <div className="group relative p-4 lg:p-0 bg-[#F0EEED] rounded-2xl flex justify-center items-center xl:w-[295px] xl:h-[298px] w-[198px] h-[200px]">
        <Image
          src={props.itemImageLink}
          alt={`${props.itemName?.split(" ").join("").toLowerCase()}`}
          width={172}
          height={152}
          className="object-scale-down lg:h-auto h-28 hover:scale-125 transition-all duration-700"
        />
      </div>
      <div className={`flex flex-col gap-2 `}>
        <p className="font-medium text-base leading-6 line-clamp-1">{props.itemName}</p>
        <div
          className={`flex ${
            props.actualPrice ? "flex-col gap-2" : "flex-row items-center"
          }`}
        >
          <div className="flex flex-row items-center gap-2">
            <StarRating rating={props.rating} />
            {props.rating}/5
          </div>
          <div className="font-medium text-base leading-6 flex gap-3 items-center">
            <span className="">{props.discountedPrice}</span>
            <span className="text-text2 opacity-50 line-through">
              {props.actualPrice ? props.actualPrice : ""}
            </span>
            {props.discount ? (
              <div className="bg-red-300 px-4 py-0.5 text-red-700 rounded-full">
                {props.discount}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
