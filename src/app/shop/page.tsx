import MobileFilters from "@/components/shop-page/filters/MobileFilters";
import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { items } from "./[id]/page";
import { BreadCrumb } from "@/components/BreadCrumb";
import Card from "@/components/itemcards/Card";
import LastOffer from "@/components/offers/LastOffer";

export default function Shop() {
  return (
    <main className="pb-20">
      <div className="max-w-frame mx-auto px-4 xl:px-0">
        <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
        <div className="ml-48 mb-6">
          <BreadCrumb location={["Home", "Casual"]} />
        </div>
        <div className="flex md:space-x-5 items-start">
          <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
            <div className="flex items-center justify-between">
              <span className="font-bold text-black text-xl">Filters</span>
              <FiSliders className="text-2xl text-black/40" />
            </div>
            <Filters />
          </div>
          <div className="flex flex-col w-full space-y-5">
            <div className="flex flex-col lg:flex-row lg:justify-between">
              <div className="flex items-center justify-between">
                <h1 className="font-bold text-2xl md:text-[32px]">Casual</h1>
                <MobileFilters />
              </div>
              <div className="flex flex-col sm:items-center sm:flex-row">
                <span className="text-sm md:text-base text-black/60 mr-3">
                  Showing 1-10 of 100 Products
                </span>
                <div className="flex items-center">Sort by: </div>
              </div>
            </div>
            <div className="w-full grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
              {items.map((item) => (
                <Card
                  id={item.id}
                  key={item.id}
                  itemImageLink={item.image1}
                  itemName={item.itemName}
                  actualPrice={item.actualPrice}
                  discountedPrice={item.discountedPrice}
                  rating={item.rating}
                  discount={item.discountpercent}
                />
              ))}
            </div>
            <hr className="border-t-black/10" />
          </div>
        </div>
        <div className="flex items-center justify-between mx-36">
          <button className="border border-black text-black rounded-full w-40 px-5 py-4">
            Previous
          </button>{" "}
          <div className="flex gap-2 py-8">
            <p className="bg-black opacity-20 text-white text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              1
            </p>
            <p className=" text-black text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              2
            </p>
            <p className=" text-black text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              3
            </p>
            <p className=" text-black text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              ...
            </p>

            <p className=" text-black text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              8
            </p>
            <p className=" text-black text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              9
            </p>
            <p className=" text-black text-xl text-opacity-100 rounded-md w-12 py-3 text-center">
              10
            </p>
          </div>
          <button className="border border-black text-black rounded-full w-40 px-5 py-4">
            Next
          </button>{" "}
        </div>
        <LastOffer />
      </div>
    </main>
  );
}
