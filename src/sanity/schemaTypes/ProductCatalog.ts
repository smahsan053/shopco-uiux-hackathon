import { defineArrayMember, defineField, defineType } from "sanity";

export const ProductCatalog = defineType({
    name: "catalog",
    title: "Product Catalog",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Product Name",
            type: "string"
        }),
        defineField({
            name: "description",
            title: "Product Description",
            type: "string"
        }),
        defineField({
            name: "price",
            title: "Product Price",
            type: "number"
        }),
        defineField({
            name: "category",
            title: "Product Category",
            type: "string",
            options: {
                list: [
                    { title: 'T-Shirt', value: 'tshirt' },
                    { title: 'Short', value: 'short' },
                    { title: 'Jeans', value: 'jeans' },
                    { title: 'Hoddie', value: 'hoodie' },
                    { title: 'Shirt', value: 'shirt' },
                ]
            }
        }),
        defineField({
            name: "discountPercent",
            title: "Product Discount Percentage",
            type: "number"
        }),
        defineField({
            name: "isNew",
            title: "New",
            type: "boolean"
        }),
        defineField({
            name: "colors",
            title: "Product Colors",
            type: "array",
            of: [defineArrayMember({ type: "string" })]
        }),
        defineField({
            name: "sizes",
            title: "Product Sizes",
            type: "array",
            of: [defineArrayMember({ type: "string" })]
        }),
        defineField({
            name: "imageUrl",
            title: "Product Image",
            type: "image",
            options: {
                hotspot: true
            }
        }),
    ]
})