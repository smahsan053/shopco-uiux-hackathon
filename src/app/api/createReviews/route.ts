import { client } from "@/sanity/lib/client";
import { NextResponse } from "next/server";
import { toast } from "react-toastify";

export async function POST(req: Request) {
    try {
        const { id, name, email, comment, rating } = await req.json();

        await client.create({
            _type: "reviews",
            catalog: {
                _type: "reference",
                _ref: id,
            },
            name,
            email,
            comment,
            rating: Number.parseInt(rating)
        });
        toast.success("Review Submitted Sucessfully")
        return NextResponse.json({ message: "Review Submitted" }, { status: 200 });
    } catch (error) {
        console.error("Error submitting review:", error);
        return NextResponse.json(
            { message: "Couldn't submit review", error },
            { status: 500 }
        );
    }
}
