import React from "react";
import { Tabs, TabsContent } from "../ui/tabs";
import { TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import Feedback from "./Feedback";
import Container from "../ui/Container";
import ProductDetails from "./ProductDetails";
import Faqs from "./Faqs";

function FeedbackTabs() {
  return (
    <Tabs defaultValue="reviews">
      <Container className="mb-4">
        <TabsList className="flex justify-between text-base md:text-xl font-normal">
          <TabsTrigger
            className="w-full border-b-2 border-black/10 data-[state=active]:border-black focus-visible:border-black transition-colors"
            value="productdetails"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            className="w-full border-b-2 border-black/10 data-[state=active]:border-black focus-visible:border-black transition-colors"
            value="reviews"
          >
            Rating & Reviews
          </TabsTrigger>
          <TabsTrigger
            className="w-full border-b-2 border-black/10 data-[state=active]:border-black focus-visible:border-black transition-colors"
            value="faqs"
          >
            FAQs
          </TabsTrigger>
        </TabsList>
      </Container>
      <TabsContent value="productdetails">
        <ProductDetails />
      </TabsContent>
      <TabsContent value="reviews">
        <Feedback isDate={true} />
      </TabsContent>
      <TabsContent value="faqs">
        <Faqs />
      </TabsContent>
    </Tabs>
  );
}

export default FeedbackTabs;
