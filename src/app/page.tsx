import Category from "@/components/category/Category";
import Feedback from "@/components/feedback/FeedbackCrousel";
import Hero from "@/components/hero/Hero";
import DisplayCard from "@/components/itemcards/DisplayCard";
export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Hero />
      <DisplayCard isNew={true} heading="NEW ARRIVALS" button={true} />
      <div className="border-t my-5 w-[80%] mx-auto"></div>
      <DisplayCard isNew={false} heading="top selling" button={true} />
      <Category />
      <Feedback />
    </div>
  );
}
