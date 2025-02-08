import React, { useState } from "react";
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
import { Button } from "../ui/button";
import { client } from "@/sanity/lib/client";
import { toast } from "react-toastify";

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
  id,
}: CustomerResponse & { isDate: boolean; className?: string; id?: string }) {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleDelete = async (id: string) => {
    try {
      await client.delete(id);
      toast.success(`Document ${id} deleted successfully`);
    } catch (error) {
      toast.error("Error deleting document");
      console.error("Error deleting document:", error);
    }
  };
  return (
    <Card className={`bg-black/10 flex-shrink relative ${className}`}>
      <CardHeader>
        <CardDescription className="flex justify-between">
          <div>
            <StarRating rating={stars} />
          </div>
          <Ellipsis
            onClick={handleClick}
            className="active:scale-95 cursor-pointer"
          />
          {open && (
            <div className="absolute top-10 right-10 px-4 py-2">
              <Button variant={"destructive"} onClick={() => handleDelete(id!)}>
                Delete Review
              </Button>
            </div>
          )}
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
