import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StarRating from "./StarRating";
import Image from "next/image";
import Container from "../ui/Container";

interface CustomerResponse {
  name: string;
  comment: string;
  stars: number;
}
export const customerResponse: CustomerResponse[] = [
  {
    name: "Sarah M.",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
  },
  {
    name: "Alex K.",
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
  },
  {
    name: "James L.",
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
  },
  {
    name: "Emily R.",
    comment:
      "Shop.co has completely transformed my wardrobe! The clothes are of incredible quality, and the variety is unmatched. I'm a loyal customer for life!",
    stars: 5,
  },
  {
    name: "Michael B.",
    comment:
      "I was skeptical at first, but Shop.co exceeded all my expectations. The delivery was fast, and the clothes fit perfectly. Highly recommended!",
    stars: 4,
  },
  {
    name: "Sophia W.",
    comment:
      "Shopping with Shop.co is always a delightful experience. The customer service is top-notch, and the products never disappoint.",
    stars: 5,
  },
  {
    name: "Daniel T.",
    comment:
      "Finally found a store that matches my style and budget. The discounts are a cherry on top. Keep up the amazing work, Shop.co!",
    stars: 4,
  },
  {
    name: "Lily H.",
    comment:
      "Every time I shop here, I find something unique and trendy. Their attention to detail and quality is evident in every piece.",
    stars: 5,
  },
  {
    name: "Chris P.",
    comment:
      "I love how Shop.co blends style and comfort. Their collection has something for every occasion, and I'm always impressed with the quality.",
    stars: 5,
  },
  {
    name: "Olivia G.",
    comment:
      "Shop.co has become my go-to online store. The variety, quality, and seamless shopping experience are unparalleled.",
    stars: 5,
  },
];
function Feedback() {
  return (
    <>
      <h1 className="font-bold font-integralcf text-3xl md:text-5xl text-wrap md:text-nowrap text-center mt-8 mb-8">
        OUR HAPPY CUSTOMERS
      </h1>
      <Carousel
        opts={{
          align: "start", // Ensures the items are aligned from the start
          loop: false, // Disables the looping to prevent misalignment
        }}
        className="relative"
      >
        {/* Navigation Arrows */}
        <Container className="absolute right-20 md:right-48">
          <CarouselNext />
          <CarouselPrevious />
        </Container>

        {/* Carousel Content */}
        <CarouselContent className="flex gap-4 px-0 sm:px-0 lg:px-0 justify-start md:justify-center mt-4">
          {customerResponse.map((response, index) => (
            <CarouselItem
              key={index}
              className="flex justify-center items-start flex-shrink-0 w-full md:max-w-md"
            >
              <div className="p-4 w-full">
                <Card className="h-48 flex flex-col justify-start items-start bg-black/10">
                  <CardContent className="p-4">
                    <div>
                      <StarRating rating={response.stars} />
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
}

export default Feedback;
