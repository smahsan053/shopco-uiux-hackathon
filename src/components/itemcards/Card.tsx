import Image from "next/image";
import React from "react";
import Link from "next/link";
import StarRating from "../feedback/StarRating";
import { CATALOG_QUERYResult } from "sanity.types";
import { urlFor } from "@/sanity/lib/image";

function Card({ catalog }: { catalog: CATALOG_QUERYResult[0] }) {
  return (
    catalog && (
      <Link
        href={`/shop/${catalog._id}`}
        className="cursor-pointer mb-2 w-full"
      >
        <div className="group relative p-4 lg:p-0 bg-[#F0EEED] rounded-2xl flex justify-center items-center xl:w-[295px] xl:h-[298px] w-[198px] h-[200px] overflow-hidden">
          <Image
            src={urlFor(catalog.imageUrl!).url()}
            alt={`${catalog.name?.split(" ").join("").toLowerCase()}`}
            width={172}
            height={152}
            className="object-cover h-full w-full hover:scale-125 transition-all duration-700"
          />
        </div>
        <div className={`flex flex-col gap-1 `}>
          <p className="font-medium text-base leading-6 line-clamp-1">
            {catalog.name}
          </p>
          <div className={`flex flex-col gap-1`}>
            <div className="flex flex-row items-center gap-2">
              <StarRating rating={catalog.rating!} />
              {catalog.rating}/5
            </div>
            <div className="font-medium text-base leading-6 flex gap-3 items-center">
              <span>
                $
                {catalog.discountPercent! > 0
                  ? catalog.price! -
                    Math.ceil((catalog.price! * catalog.discountPercent!) / 100)
                  : catalog.price}
              </span>
              <span
                className={`text-text2 opacity-50 ${catalog.discountPercent! > 0 ? "line-through" : "hidden"}`}
              >
                ${catalog.price}
              </span>
              {catalog.discountPercent! > 0 ? (
                <div className="bg-red-300 px-4 text-sm py-0.5 text-red-700 rounded-full">
                  {catalog.discountPercent}%
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


