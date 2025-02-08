import { defineField, defineType } from "sanity";

export const ReviewsSchema = defineType({
    name: "reviews",
    type: "document",
    title: "Customer Reviews",
    fields: [
        defineField({
            name: "name",
            type: "string"
        }),
        defineField({
            name: "email",
            type: "string"
        }),
        defineField({
            name: "comment",
            type: "text",
            validation: Rule => Rule.min(1).max(500)
        }),
        defineField({
            name: "rating",
            type: "number"
        }),
        defineField({
            name: "catalog",
            type: "reference",
            to: { type: "catalog" }
        })
    ]
})