import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Ellipsis } from "lucide-react";
import StarRating from "./StarRating";

interface CustomerResponse {
  name: string;
  comment: string;
  stars: number;
  date?: string;
}
function FeedbackCard({
  name,
  comment,
  stars,
  date,
  isDate,
  className,
}: CustomerResponse & { isDate: boolean; className?: string }) {
  return (
    <Card className={`bg-black/10 flex-shrink ${className}`}>
      <CardHeader>
        <CardDescription className="flex justify-between">
          <div>
            <StarRating rating={stars} />
          </div>
          <Ellipsis />
        </CardDescription>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>{comment}</CardContent>
      {isDate && <CardContent>{date}</CardContent>}
      <CardFooter></CardFooter>
    </Card>
  );
}

export default FeedbackCard;
