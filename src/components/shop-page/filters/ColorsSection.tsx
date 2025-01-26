import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoMdCheckmark } from "react-icons/io";
import { cn } from "@/lib/utils";
import { CATALOG_QUERYResult } from "sanity.types";

const ColorsSection = ({
  products,
  setSelectedColor,
  selectedColor,
}: {
  products: CATALOG_QUERYResult;
  setSelectedColor: React.Dispatch<React.SetStateAction<string>>;
  selectedColor: string;
}) => {
  // const [selected, setSelected] = useState<string>("bg-green-600");

  return (
    <Accordion type="single" collapsible defaultValue="filter-colors">
      <AccordionItem value="filter-colors" className="border-none">
        <AccordionTrigger className="text-black font-bold text-xl hover:no-underline p-0 py-0.5">
          Colors
        </AccordionTrigger>
        <AccordionContent className="pt-4 pb-0">
          <div className="flex space-2.5 flex-wrap md:grid grid-cols-5 gap-2.5">
            {Array.from(
              new Set(products.map((product) => product.colors).flat())
            ).map((color, index) => (
              <button
                key={index}
                type="button"
                className={cn([
                  "rounded-full w-9 sm:w-10 h-9 sm:h-10 flex items-center justify-center border border-black/20",
                ])}
                style={{ backgroundColor: color! }}
                onClick={() => setSelectedColor(color!)}
                onDoubleClick={() => setSelectedColor("")}
              >
                {selectedColor === color && (
                  <IoMdCheckmark
                    className={`text-base ${selectedColor === "Yellow" || selectedColor === "White" ? "text-black" : "text-white"}`}
                  />
                )}
              </button>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorsSection;
