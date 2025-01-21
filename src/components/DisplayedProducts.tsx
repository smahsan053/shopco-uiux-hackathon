"use client";
import React, { useEffect, useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import MobileFilters from "./shop-page/filters/MobileFilters";
import SortProduct from "./SortProduct";
import Card from "@/components/itemcards/Card";
import Filters from "./shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { CATALOG_QUERYResult, CATEGORIES_QUERYResult } from "sanity.types";

function DisplayedProducts({
  catalog,
  categoriesData,
}: {
  catalog: CATALOG_QUERYResult;
  categoriesData: CATEGORIES_QUERYResult;
}) {
  const [sortCriteria, setSortCriteria] = useState("most-popular");
  const [priceRange, setPriceRange] = useState([50, 300]);
  const [category, setCategory] = useState("");
  console.log(category);

  const limitProductPrice = (catalog: CATALOG_QUERYResult) => {
    return [...catalog].filter(
      (item) => item.price! <= priceRange[1] && item.price! >= priceRange[0]
    );
  };
  const sortProducts = (catalog: CATALOG_QUERYResult) => {
    switch (sortCriteria) {
      case "high-price":
        return [...catalog].sort((a, b) =>
          a.price && b.price ? b.price - a.price : 0
        );
      case "low-price":
        return [...catalog].sort((a, b) =>
          a.price && b.price ? a.price - b.price : 0
        );
      case "most-popular":
        return [...catalog].sort((a, b) => b.rating! - a.rating!); // Sort by stars (most relevant)
      default:
        return catalog;
    }
  };
  const priceLimit = limitProductPrice(catalog);
  const sortedProducts = sortProducts(priceLimit);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  return (
    <div className="flex md:space-x-5 items-start">
      <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6 mt-6">
        <Accordion type="single" collapsible defaultValue="filter">
          <AccordionItem value="filter" className="border-none">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <AccordionTrigger hideChevron>
                <FiSliders className="text-2xl text-black" />
              </AccordionTrigger>
            </div>
            <AccordionContent>
              <Filters
                setPriceRange={setPriceRange}
                setCategory={setCategory}
                categoriesData={categoriesData}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="flex flex-col w-full space-y-5">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl md:text-[32px] capitalize">
              {category
                ? category === "tshirt"
                  ? category.replace("tshirt", "T-Shirt")
                  : category
                : "All Products"}
            </h1>
            <MobileFilters
              setPriceRange={setPriceRange}
              setCategory={setCategory}
              categoriesData={categoriesData}
            />
          </div>
          <div className="flex flex-col sm:items-center sm:flex-row">
            <span className="text-sm md:text-base text-black/60 mr-3">
              Showing 1-10 of 100 Products
            </span>
            <SortProduct setSortCriteria={setSortCriteria} />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {!category
            ? sortedProducts.map((product) => (
                <Card catalog={product} key={product._id} />
              ))
            : sortedProducts.map(
                (product) =>
                  product.category === category && (
                    <Card key={product._id} catalog={product} />
                  )
              )}
        </div>
        <hr className="border-t-black/10" />
        <Pagination className="justify-between">
          <PaginationPrevious href="#" className="border border-black/10" />
          <PaginationContent>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="text-black/50 font-medium text-sm"
                isActive
              >
                1
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="text-black/50 font-medium text-sm"
              >
                2
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="hidden lg:block">
              <PaginationLink
                href="#"
                className="text-black/50 font-medium text-sm"
              >
                3
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis className="text-black/50 font-medium text-sm" />
            </PaginationItem>
            <PaginationItem className="hidden lg:block">
              <PaginationLink
                href="#"
                className="text-black/50 font-medium text-sm"
              >
                8
              </PaginationLink>
            </PaginationItem>
            <PaginationItem className="hidden sm:block">
              <PaginationLink
                href="#"
                className="text-black/50 font-medium text-sm"
              >
                9
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink
                href="#"
                className="text-black/50 font-medium text-sm"
              >
                10
              </PaginationLink>
            </PaginationItem>
          </PaginationContent>

          <PaginationNext href="#" className="border border-black/10" />
        </Pagination>
      </div>
    </div>
  );
}

export default DisplayedProducts;
