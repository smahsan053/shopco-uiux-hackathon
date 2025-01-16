import React from "react";
import { items } from "@/app/shop/[id]/page";
import Card from "@/components/itemcards/Card";
import Link from "next/link";
import Container from "../ui/Container";
interface PropType {
  section: string;
  heading: string;
  button: boolean;
}
function DisplayCard(props: PropType) {
  return (
    <Container className="mt-10 flex flex-col md:items-center">
      <h1 className="font-bold text-3xl md:text-5xl text-wrap md:text-nowrap text-center font-integralcf">
        {props.heading}
      </h1>
      <div className="flex items-center justify-start lg:justify-center gap-6 lg:gap-4 mt-12">
        {items
          .filter((item) => item.section === props.section)
          .map((item) => (
            <Card
              product={item} key={item.id}
            />
          ))}
      </div>
      {props.button ? (
        <Link
          href={"/shop"}
          className="border border-black hover:bg-black/5 active:bg-transparent w-full md:w-[230px] h-12 rounded-full flex justify-center items-center mt-6 mb-4"
        >
          View All
        </Link>
      ) : (
        ""
      )}
    </Container>
  );
}

export default DisplayCard;
