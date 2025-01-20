import React from "react";
import CategoriesSection from "@/components/shop-page/filters/CategoriesSection";
import ColorsSection from "@/components/shop-page/filters/ColorsSection";
import DressStyleSection from "@/components/shop-page/filters/DressStyleSection";
import PriceSection from "@/components/shop-page/filters/PriceSection";
import SizeSection from "@/components/shop-page/filters/SizeSection";
import { Button } from "@/components/ui/button";
import { CATEGORIES_QUERYResult } from "sanity.types";

const Filters = ({
  setPriceRange,
  setCategory,
  categoriesData,
}: {
  setPriceRange: React.Dispatch<React.SetStateAction<number[]>>;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
  categoriesData: CATEGORIES_QUERYResult;
}) => {
  return (
    <>
      <hr className="border-t-black/10" />
      <CategoriesSection
        setCategory={setCategory}
        categoriesData={categoriesData}
      />
      <hr className="border-t-black/10" />
      <PriceSection setPriceRange={setPriceRange} />
      <hr className="border-t-black/10" />
      <ColorsSection />
      <hr className="border-t-black/10" />
      <SizeSection />
      <hr className="border-t-black/10" />
      <DressStyleSection />
      <Button
        type="button"
        className="bg-black w-full rounded-full text-sm font-medium py-4 h-12"
      >
        Apply Filter
      </Button>
    </>
  );
};

export default Filters;
