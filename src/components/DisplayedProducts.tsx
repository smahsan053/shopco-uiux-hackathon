"use client";
import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
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
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

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
  const paginateProducts = (catalog: CATALOG_QUERYResult) => {
    return catalog.slice(startIndex, lastIndex);
  };
  const categorizedProducts = (
    catalog: CATALOG_QUERYResult,
    category: string
  ) => {
    if (category.length > 0) {
      return catalog.filter((product) => product.category === category);
    } else {
      return catalog;
    }
  };
  const products = categorizedProducts(catalog, category);
  const totalProducts = products.length;
  const productsPerPage = 2;
  const numOfPages = Math.ceil(totalProducts / productsPerPage);
  const displayedProductsLength = Math.ceil(totalProducts / numOfPages);
  const startIndex = (currentPage - 1) * displayedProductsLength;
  const lastIndex = startIndex + displayedProductsLength;
  const paginatedCatalog = paginateProducts(products);
  const priceLimit = limitProductPrice(paginatedCatalog);
  const sortedProducts = sortProducts(priceLimit);
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
              Showing {startIndex + 1}-{lastIndex} of {products.length} Products
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
          <PaginationPrevious
            href={`/shop?page=${currentPage - 1}`}
            className={`border border-black/10 ${currentPage === 1 ? "btn-disabled" : ""}`}
            onClick={() => setCurrentPage(currentPage - 1)}
          />
          {
            <PaginationContent>
              {Array.from({ length: numOfPages }, (_, index) => index + 1).map(
                (page) => (
                  <PaginationLink
                    key={page}
                    href={`/shop?page=${page}`}
                    className="text-black/50 font-medium text-sm"
                    isActive={currentPage === page ? true : false}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                )
              )}
            </PaginationContent>
          }
          <PaginationNext
            href={`/shop?page=${currentPage + 1}`}
            className={`border border-black/10 ${currentPage === numOfPages ? "btn-disabled" : ""}`}
            onClick={() => setCurrentPage(currentPage + 1)}
          />
        </Pagination>
      </div>
    </div>
  );
}

export default DisplayedProducts;
