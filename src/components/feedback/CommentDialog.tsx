"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import StarRating from "./Ratings";
import { toast } from "react-toastify";

function CommentDialog({ id }: { id: string }) {
  const [reviewsData, setReviewsData] = useState({
    name: "",
    email: "",
    comment: "",
    rating: null,
    id,
  });
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setReviewsData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/api/createReviews", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify JSON content type
      },
      body: JSON.stringify(reviewsData),
    })
      .then((response) => {
        setReviewsData({
          name: "",
          email: "",
          comment: "",
          rating: null,
          id,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        toast.success("Review submitted successfully");
        return data;
      })
      .catch((error) => {
        toast.error("Error submitting review");
        console.error("Error submitting review:", error);
      });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">Write a Review</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-gray-800">
            Add Your Review
          </DialogTitle>
          <DialogDescription className="mt-2 text-gray-600 text-sm">
            Share your thoughts and experiences with us. Your feedback helps us
            improve and serve you better.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4"
          onSubmit={(e) => {
            handleSubmit(e);
          }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={reviewsData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md bg-transparent focus:ring-2 focus:ring-black"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={reviewsData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-transparent rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="comment"
              className="block text-sm font-medium text-gray-700"
            >
              Comment
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={4}
              value={reviewsData.comment}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 bg-transparent rounded-md focus:ring-2 focus:ring-black"
              placeholder="Enter your comment"
              required
            ></textarea>
          </div>
          <StarRating handleChange={handleChange} />
          <DialogFooter>
            <Button className="active:scale-95" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default CommentDialog;
