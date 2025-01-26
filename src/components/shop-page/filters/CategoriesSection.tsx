import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { CATEGORIES_QUERYResult } from "sanity.types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CategoriesSection = ({
  setCategory,
  categoriesData,
  setCurrentPage,
}: {
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categoriesData: CATEGORIES_QUERYResult;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <Accordion type="single" collapsible defaultValue="filter-category">
      <AccordionItem value="filter-category" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Category
        </AccordionTrigger>
        <AccordionContent className="flex flex-col space-y-0.5 text-black/60">
          <Link
            key="all"
            href="/shop"
            className="flex items-center justify-between py-2 capitalize"
            onClick={() => {
              setCategory("");
              setCurrentPage(1);
            }} 
          >
            All Products <MdKeyboardArrowRight />
          </Link>
          {Array.from(new Set(categoriesData.map((item) => item.category))).map(
            (category, idx) => (
              <Link
                key={idx}
                href={`/shop?category=${category}`}
                className="flex items-center justify-between py-2 capitalize"
                onClick={() => {
                  setCategory(category!.toLowerCase());
                  setCurrentPage(1);
                }}
              >
                {category === "tshirt"
                  ? category.replace("tshirt", "T-Shirt")
                  : category}{" "}
                <MdKeyboardArrowRight />
              </Link>
            )
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default CategoriesSection;
