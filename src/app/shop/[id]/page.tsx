// src/app/product/[id]/page.tsx

import { BreadCrumb } from "@/components/BreadCrumb";
import Product from "@/components/product/Product";
import Image from "next/image";
import { customerResponse } from "@/components/feedback/Feedback";
import StarRating from "@/components/feedback/StarRating";
import LastOffer from "@/components/offers/LastOffer";
import DisplayCard from "@/components/itemcards/DisplayCard";
interface Item {
  id: string;
  itemName: string;
  image1: string;
  image2: string;
  image3: string;
  image4: string;
  actualPrice: string;
  discountedPrice: string;
  rating: number;
  discountpercent?: string;
  section?: string;
}
export const items: Item[] = [
  {
    id: "1",
    itemName: "One Life Graphic T-shirt",
    image1: "/item/graphictshirt1.png",
    image2: "/item/graphictshirt2.png",
    image3: "/item/graphictshirt3.png",
    image4: "/item/graphictshirt4.png",
    discountedPrice: "$260.00",
    actualPrice: "$300",
    rating: 4.5,
    discountpercent: "-40",
  },
  {
    id: "2",
    itemName: "T-SHIRT WITH TAPE DETAILS",
    image1: "/item/tshirt.png",
    image2: "/item/tshirt.png",
    image3: "/item/tshirt.png",
    image4: "/item/tshirt.png",
    discountedPrice: "$120.00",
    actualPrice: " ",
    rating: 3.5,
    section: "newArrivals",
  },
  {
    id: "3",
    itemName: "SKINNY FIT JEANS",
    image1: "/item/jeans.png",
    image2: "/item/jeans.png",
    image3: "/item/jeans.png",
    image4: "/item/jeans.png",
    discountedPrice: "$240.00",
    actualPrice: "$260",
    rating: 4.5,
    discountpercent: "-20",
    section: "newArrivals",
  },
  {
    id: "4",
    itemName: "CHECKERED SHIRT",
    image1: "/item/chekeredshirt.png",
    image2: "/item/chekeredshirt.png",
    image3: "/item/chekeredshirt.png",
    image4: "/item/chekeredshirt.png",
    discountedPrice: "$180.00",
    actualPrice: " ",
    rating: 4.5,
    section: "newArrivals",
  },
  {
    id: "5",
    itemName: "SLEEVE STRIPED T-SHIRT",
    image1: "/item/stripedshirt.png",
    image2: "/item/stripedshirt.png",
    image3: "/item/stripedshirt.png",
    image4: "/item/stripedshirt.png",
    discountedPrice: "$160.00",
    actualPrice: "$130",
    rating: 4.5,
    discountpercent: "-30",
    section: "newArrivals",
  },
  {
    id: "6",
    itemName: "VERTICAL STRIPED SHIRT",
    image1: "/item/vstripedshirt.png",
    image2: "/item/vstripedshirt.png",
    image3: "/item/vstripedshirt.png",
    image4: "/item/vstripedshirt.png",
    discountedPrice: "$212.00",
    actualPrice: "$232",
    rating: 5,
    discountpercent: "-20",
    section: "topSellings",
  },
  {
    id: "7",
    itemName: "COURAGE GRAPHIC T-SHIRT",
    image1: "/item/couragetshirt.png",
    image2: "/item/couragetshirt.png",
    image3: "/item/couragetshirt.png",
    image4: "/item/couragetshirt.png",
    discountedPrice: "$145.00",
    actualPrice: " ",
    rating: 4,
    section: "topSellings",
  },
  {
    id: "8",
    itemName: "LOOSE FIT BERMUDA SHORTS",
    image1: "/item/shorts.png",
    image2: "/item/shorts.png",
    image3: "/item/shorts.png",
    image4: "/item/shorts.png",
    discountedPrice: "$80.00",
    actualPrice: " ",
    rating: 3,
    section: "topSellings",
  },
  {
    id: "9",
    itemName: "FADED SKINNY JEANS",
    image1: "/item/skinnyjeans.png",
    image2: "/item/skinnyjeans.png",
    image3: "/item/skinnyjeans.png",
    image4: "/item/skinnyjeans.png",
    discountedPrice: "$210.00",
    actualPrice: " ",
    rating: 4.5,
    section: "topSellings",
  },
  {
    id: "10",
    itemName: "Polo with Contrast Trims",
    image1: "/item/polocontrast.png",
    image2: "/item/polocontrast.png",
    image3: "/item/polocontrast.png",
    image4: "/item/polocontrast.png",
    discountedPrice: "$212.00",
    actualPrice: "$242",
    rating: 4.0,
    discountpercent: "-29",
    section: "recommeneded",
  },
  {
    id: "11",
    itemName: "Gradient Graphic T-shirt",
    image1: "/item/gradienttshirt.png",
    image2: "/item/gradienttshirt.png",
    image3: "/item/gradienttshirt.png",
    image4: "/item/gradienttshirt.png",
    discountedPrice: "$145.00",
    actualPrice: " ",
    rating: 3.5,
    section: "recommeneded",
  },
  {
    id: "12",
    itemName: "Polo with Tipping Details",
    image1: "/item/polotipping.png",
    image2: "/item/polotipping.png",
    image3: "/item/polotipping.png",
    image4: "/item/polotipping.png",
    discountedPrice: "$180.00",
    actualPrice: " ",
    rating: 4.5,
    section: "recommeneded",
  },
  {
    id: "13",
    itemName: "Black Striped T-shirt",
    image1: "/item/blacktshirt.png",
    image2: "/item/blacktshirt.png",
    image3: "/item/blacktshirt.png",
    image4: "/item/blacktshirt.png",
    discountedPrice: "$120.00",
    actualPrice: "$150",
    rating: 5,
    discountpercent: "-30",
    section: "recommeneded",
  },
];
export default async function ProductPage(props: {
  params: Promise<{ id: string }>;
}) {
  // You can directly access the `id` from the `params` object
  const params = await props.params;
  const id = params.id;
  return (
    <div className="relative overflow-x-hidden">
      {items.map((item) =>
        item.id === id ? (
          <div key={item.id} className="flex flex-col gap-14">
            <BreadCrumb location={["Home", "Shop", "Men", "T-shirts"]} />
            <Product
              image1={item.image1}
              image2={item.image2}
              image3={item.image3}
              image4={item.image4}
              itemName={item.itemName}
              rating={item.rating}
              discountedPrice={item.discountedPrice}
              actualPrice={item.actualPrice}
              discountpercent={item.discountpercent}
            />
          </div>
        ) : (
          ""
        )
      )}
      <div className="flex flex-col justify-center items-center">
        <div className="font-medium text-xl flex justify-center items-center">
          <div className="flex justify-center items-center text-center gap-4 overflow-hidden">
            <div className="mb-8 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
              <h2 className="opacity-60 pb-10">Product Details</h2>
              <div className="border-t w-full border-black border-opacity-30 pb-4"></div>
            </div>

            <div className="mb-8 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
              <h2 className="pb-10 text-nowrap">Rating & Reviews</h2>
              <div className="border-t w-full border-black pb-4"></div>
            </div>

            <div className="mb-8 w-[250px] sm:w-[300px] md:w-[350px] lg:w-[400px]">
              <h2 className="opacity-60 pb-10">FAQs</h2>
              <div className="border-t w-full border-black border-opacity-30 pb-4"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center w-full">
          <div className="flex justify-between items-center w-full max-w-7xl">
            <h2 className="font-bold text-2xl ml-6">All Reviews (45)</h2>
            <div className="flex gap-6 items-center">
              <Image
                src="/customerfeedback/filter.png"
                alt="filter"
                width={48}
                height={48}
              />
              <div
                className={`hidden px-6 py-3 w-24 h-12 rounded-full text-base opacity-60 font-medium nd:flex justify-center items-center bg-[#F0F0F0] cursor-pointer text-nowrap`}
              >
                Latest
                <Image
                  aria-hidden
                  src="/header/dropdown.svg"
                  alt="cross"
                  width={16}
                  height={16}
                />
              </div>
              <button className="bg-black text-white rounded-full w-40 px-5 py-4">
                Write a Review
              </button>
            </div>
          </div>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-28 mx-3 mt-5">
          {customerResponse.slice(0, 6).map((response, index) => (
            <div
              key={index}
              className="border border-black w-full h-[260px] rounded-2xl flex flex-col gap-6"
            >
              <div className="mt-8 px-8 space-y-6">
                <div className="flex justify-between">
                  <StarRating rating={response.stars} />
                  <div className="relative text-5xl opacity-60 leading-3">
                    ...
                  </div>
                </div>
                <h1 className="font-bold text-lg mt-2 flex justify-start items-center gap-4">
                  {response.name}
                  <Image
                    src={"/customerfeedback/greentick.png"}
                    alt="greentick"
                    width={20}
                    height={20}
                  />
                </h1>
                <p className="font-normal text-sm opacity-70 mt-2">
                  {response.comment}
                </p>
                <p className="font-bold text-sm opacity-70 mt-2">
                  Posted on August 16, 2023
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="border border-black w-[230px] h-12 rounded-full flex justify-center items-center mt-4 mb-4">
          Load More Reviews
        </div>
        <div className="space-y-8">
          <DisplayCard
            heading="You might also like"
            button={false}
            section="recommeneded"
          />
          <LastOffer />
        </div>
      </div>
    </div>
  );
}
