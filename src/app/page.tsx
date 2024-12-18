import Category from "@/components/category/Category";
import Feedback from "@/components/feedback/Feedback";
import Hero from "@/components/hero/Hero";
import DisplayCard from "@/components/itemcards/DisplayCard";
import LastOffer from "@/components/offers/LastOffer";
export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <DisplayCard section="newArrivals" heading="NEW ARRIVALS" button={true} />
      <div className="border-t my-5 w-[80%] mx-auto"></div>
      <DisplayCard section="topSellings" heading="top selling" button={true} />
      <Category />
      <Feedback />
      <LastOffer />
    </div>
  );
}
