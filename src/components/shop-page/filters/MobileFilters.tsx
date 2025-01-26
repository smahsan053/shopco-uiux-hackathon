import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { FiSliders } from "react-icons/fi";
import Filters from ".";
import { CATALOG_QUERYResult, CATEGORIES_QUERYResult } from "sanity.types";

const MobileFilters = ({
  setPriceRange,
  setCategory,
  categoriesData,
  setCurrentPage,
  products,
  setSelectedColor,
  selectedColor,
  selectedSize,
  setSelectedSize,
}: {
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categoriesData: CATEGORIES_QUERYResult;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  products: CATALOG_QUERYResult;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
  selectedSize: string;
  setSelectedSize: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button
          type="button"
          className="h-8 w-8 rounded-full bg-[#F0F0F0] text-black p-1 md:hidden"
        >
          <FiSliders className="text-base mx-auto" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="max-h-[90%]">
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <span className="font-bold text-black text-xl">Filters</span>
            <FiSliders className="text-2xl text-black/40" />
          </div>
          <DrawerTitle className="hidden">filters</DrawerTitle>
          <DrawerDescription className="hidden">filters</DrawerDescription>
        </DrawerHeader>
        <div className="max-h-[90%] overflow-y-auto w-full px-5 md:px-6 py-5 space-y-5 md:space-y-6">
          <Filters
            setPriceRange={setPriceRange}
            setCategory={setCategory}
            categoriesData={categoriesData}
            products={products}
            setCurrentPage={setCurrentPage}
            selectedColor={selectedColor}
            setSelectedColor={setSelectedColor}
            setSelectedSize={setSelectedSize}
            selectedSize={selectedSize}
          />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileFilters;
