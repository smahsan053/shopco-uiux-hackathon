"use client";
import React, { useState } from "react";
import FeedbackCard from "./FeedbackCard";
import Container from "../ui/Container";
import { Button } from "../ui/button";
import CommentDialog from "./CommentDialog";
import FilterComment from "./FilterComment";

export interface CustomerResponse {
  name: string;
  comment: string;
  stars: number;
  date?: Date;
}
export const customerResponse: CustomerResponse[] = [
  {
    name: "Sarah M.",
    comment:
      "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    stars: 5,
    date: new Date("2023-10-01T12:00:00Z"),
  },
  {
    name: "Alex K.",
    comment:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    stars: 5,
    date: new Date("2024-11-01T12:00:00Z"),
  },
  {
    name: "James L.",
    comment:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
    stars: 5,
    date: new Date("2023-12-01T12:00:00Z"),
  },
  {
    name: "Emily R.",
    comment:
      "Shop.co has completely transformed my wardrobe! The clothes are of incredible quality, and the variety is unmatched. I'm a loyal customer for life!",
    stars: 5,
    date: new Date("2024-09-01T12:00:00Z"),
  },
  {
    name: "Michael B.",
    comment:
      "I was skeptical at first, but Shop.co exceeded all my expectations. The delivery was fast, and the clothes fit perfectly. Highly recommended!",
    stars: 4,
    date: new Date("2024-02-01T12:00:00Z"),
  },
  {
    name: "Sophia W.",
    comment:
      "Shopping with Shop.co is always a delightful experience. The customer service is top-notch, and the products never disappoint.",
    stars: 5,
    date: new Date("2025-01-01T12:00:00Z"),
  },
  {
    name: "Daniel T.",
    comment:
      "Finally found a store that matches my style and budget. The discounts are a cherry on top. Keep up the amazing work, Shop.co!",
    stars: 4,
    date: new Date("2024-12-01T12:00:00Z"),
  },
  {
    name: "Lily H.",
    comment:
      "Every time I shop here, I find something unique and trendy. Their attention to detail and quality is evident in every piece.",
    stars: 5,
    date: new Date("2023-07-01T12:00:00Z"),
  },
  {
    name: "Chris P.",
    comment:
      "I love how Shop.co blends style and comfort. Their collection has something for every occasion, and I'm always impressed with the quality.",
    stars: 5,
    date: new Date("2024-06-01T12:00:00Z"),
  },
  {
    name: "Olivia G.",
    comment:
      "Shop.co has become my go-to online store. The variety, quality, and seamless shopping experience are unparalleled.",
    stars: 5,
    date: new Date("2024-06-01T12:00:00Z"),
  },
];

function Feedback({ isDate }: { isDate: boolean }) {
  const [lastCardIndex, setLastCardIndex] = useState(6);
  const displayedResponse = customerResponse.slice(0, lastCardIndex);
  const [sortCriteria, setSortCriteria] = useState("latest");

  const sortComments = (displayedResponse: CustomerResponse[]) => {
    switch (sortCriteria) {
      case "status":
        return [...displayedResponse].sort((a, b) =>
          a.date && b.date ? b.date?.getTime() - a.date.getTime() : 0
        ); // Sort by latest date
      case "panel":
        return [...displayedResponse].sort((a, b) =>
          a.date && b.date ? a.date?.getTime() - b.date.getTime() : 0
        ); // Sort by oldest date
      case "activity":
        return [...displayedResponse].sort((a, b) => b.stars - a.stars); // Sort by stars (most relevant)
      default:
        return displayedResponse;
    }
  };
  const sortedComments = sortComments(displayedResponse);

  return (
    <Container className="flex justify-center items-center flex-col gap-6 relative">
      <div className="flex justify-between items-center w-full">
        <h2 className="font-bold text-2xl">
          All Reviews{" "}
          <span className="text-base font-normal text-black text-opacity-60">
            ({customerResponse.length})
          </span>
        </h2>
        <div className="flex gap-6 items-center">
          <FilterComment setSortCriteria={setSortCriteria} />
          <CommentDialog />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
        {sortedComments.map((response, i) => (
          <FeedbackCard
            key={i}
            name={response.name}
            comment={response.comment}
            stars={response.stars}
            date={response.date?.toDateString()}
            isDate={isDate}
          />
        ))}
      </div>
      <Button
        variant={"outline"}
        className="rounded-full"
        onClick={() => {
          setLastCardIndex(customerResponse.length);
        }}
      >
        Load More Reviews
      </Button>
    </Container>
  );
}

export default Feedback;
