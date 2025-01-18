"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import MobileFilters from "./shop-page/filters/MobileFilters";
import SortProduct from "./SortProduct";
import Card from "@/components/itemcards/Card";
import Filters from "./shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { CATALOG_QUERYResult } from "sanity.types";

function DisplayedProducts({ catalog }: { catalog: CATALOG_QUERYResult }) {
  const [sortCriteria, setSortCriteria] = useState("most-popular");
  const [priceRange, setPriceRange] = useState([110, 230]);

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
        return [...catalog].sort((a, b) => b.rating - a.rating); // Sort by stars (most relevant)
      default:
        return catalog;
    }
  };
  const priceLimit = limitProductPrice(catalog);
  const sortedProducts = sortProducts(priceLimit);

  return (
    <div className="flex md:space-x-5 items-start">
      <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
        <div className="flex items-center justify-between">
          <span className="font-bold text-black text-xl">Filters</span>
          <FiSliders className="text-2xl text-black/40" />
        </div>
        <Filters setPriceRange={setPriceRange} />
      </div>
      <div className="flex flex-col w-full space-y-5">
        <div className="flex flex-col lg:flex-row lg:justify-between">
          <div className="flex items-center justify-between">
            <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
            <MobileFilters setPriceRange={setPriceRange} />
          </div>
          <div className="flex flex-col sm:items-center sm:flex-row">
            <span className="text-sm md:text-base text-black/60 mr-3">
              Showing 1-10 of 100 Products
            </span>
            <SortProduct setSortCriteria={setSortCriteria} />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {sortedProducts.map((product) => (
            <Card catalog={product} key={product._id} />
          ))}
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
