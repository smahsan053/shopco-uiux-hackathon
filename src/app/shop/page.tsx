import Filters from "@/components/shop-page/filters";
import { FiSliders } from "react-icons/fi";
import { BreadCrumb } from "@/components/BreadCrumb";
import Container from "@/components/ui/Container";
import getAllProducts from "@/sanity/helpers";
import DisplayedProducts from "@/components/DisplayedProducts";
import { items } from "./[id]/page";

export default async function Shop() {
  const products = await getAllProducts();
  console.log(products);

  return (
    <Container>
      <hr className="h-[1px] border-t-black/10 mb-5 sm:mb-6" />
      <BreadCrumb location={["Home", "Casual"]} />
      <div className="flex md:space-x-5 items-start">
        <div className="hidden md:block min-w-[295px] max-w-[295px] border border-black/10 rounded-[20px] px-5 md:px-6 py-5 space-y-5 md:space-y-6">
          <div className="flex items-center justify-between">
            <span className="font-bold text-black text-xl">Filters</span>
            <FiSliders className="text-2xl text-black/40" />
          </div>
          <Filters setPriceRange={} />
        </div>
        <DisplayedProducts items={items} />
      </div>
    </Container>
  );
}
