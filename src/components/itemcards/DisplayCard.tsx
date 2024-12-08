import React from "react";
import { items } from "@/app/shop/[id]/page";
import Card from "@/components/itemcards/Card";
interface PropType {
  section: string;
  heading: string;
  button: boolean;
}
function DisplayCard(props: PropType) {
  return (
    <div className="relative flex flex-col items-center justify-center mt-6">
      <h1 className="font-bold text-5xl text-wrap md:text-nowrap text-center ">
        {props.heading}
      </h1>
      <div className="flex items-center justify-start lg:justify-center gap-6 lg:gap-4 mt-12 mx-8 lg:mx-0">
        {items
          .filter((item) => item.section === props.section)
          .map((item) => (
            <Card
              id={item.id}
              key={item.id}
              itemImageLink={item.image1}
              itemName={item.itemName}
              actualPrice={item.actualPrice}
              discountedPrice={item.discountedPrice}
              rating={item.rating}
              discount={item.discountpercent}
            />
          ))}
      </div>
      {props.button ? (
        <div className="border border-black w-[230px] h-12 rounded-full flex justify-center items-center mt-6 mb-4">
          View All
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default DisplayCard;
