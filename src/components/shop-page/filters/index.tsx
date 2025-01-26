import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { CATALOG_QUERYResult, CATEGORIES_QUERYResult } from "sanity.types";

const Filters = ({
  setPriceRange,
  setCategory,
  categoriesData,
  products,
  setCurrentPage,
  setSelectedColor,
  selectedColor,
  selectedSize,
  setSelectedSize,
}: {
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categoriesData: CATEGORIES_QUERYResult;
  products: CATALOG_QUERYResult;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection
        setCategory={setCategory}
        categoriesData={categoriesData}
        setCurrentPage={setCurrentPage}
      />
      <hr className="border-t-black/10" />
      <PriceSection setPriceRange={setPriceRange} />
      <hr className="border-t-black/10" />
      <ColorsSection
        products={products}
        setSelectedColor={setSelectedColor}
        selectedColor={selectedColor}
      />
      <hr className="border-t-black/10" />
      <SizeSection
        products={products}
        setSelectedSize={setSelectedSize}
        selectedSize={selectedSize}
      />
      <hr className="border-t-black/10" />
      {/* <DressStyleSection /> */}
      {/* <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button> */}
    </>
  );
};

export default Filters;
