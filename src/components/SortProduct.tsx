import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
function SortProduct({
  setSortCriteria,
}: {
  setSortCriteria: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex items-center">
      Sort by:{" "}
      <Select
        defaultValue="most-popular"
        onValueChange={(value) => setSortCriteria(value)}
      >
        <SelectTrigger className="font-medium text-sm px-1.5 sm:text-base w-fit text-black bg-transparent shadow-none border-none">
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="most-popular">Most Popular</SelectItem>
          <SelectItem value="low-price">Low Price</SelectItem>
          <SelectItem value="high-price">High Price</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}

export default SortProduct;
