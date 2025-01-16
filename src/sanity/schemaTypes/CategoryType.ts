import { defineField, defineType } from "sanity";

export const CategoryType = defineType({
    name: "category",
    type: "document",
    title: "Product Category",
    fields: [
        defineField({
            name: "category",
            type: "string",
            title: "Product Category",
        })
    ]
})