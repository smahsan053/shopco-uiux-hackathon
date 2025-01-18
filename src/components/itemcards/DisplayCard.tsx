import React from "react";
import Card from "@/components/itemcards/Card";
import Link from "next/link";
import Container from "../ui/Container";
import { getProductsCatalog } from "@/sanity/helpers";
interface PropType {
  heading: string;
  button: boolean;
  isNew?: boolean;
  id?: string;
}
async function DisplayCard(props: PropType) {
  const catalog = await getProductsCatalog();
  return (
    <Container className="mt-10 flex flex-col md:items-center">
      <h1 className="font-bold text-3xl md:text-5xl text-wrap md:text-nowrap text-center font-integralcf">
        {props.heading}
      </h1>
      <div className="flex items-center justify-start lg:justify-center gap-6 lg:gap-4 mt-12">
        {/* {items
          .filter((item) => item.section === props.section)
          .map((item) => (
            <Card product={item} key={item.id} />
          ))} */}
        {props.isNew && !props.id
          ? catalog
              .filter((product) => product.isNew)
              .slice(0, 4)
              .map((product) => <Card catalog={product} key={product._id} />)
          : !props.isNew && !props.id
            ? catalog
                .filter((product) => !product.isNew)
                .slice(0, 4)
                .map((product) => <Card catalog={product} key={product._id} />)
            : catalog
                .filter(
                  (product) =>
                    product.category ===
                    catalog.find((product) => product._id === props.id)
                      ?.category
                )
                .slice(0, 4)
                .map((product) => <Card catalog={product} key={product._id} />)}
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
