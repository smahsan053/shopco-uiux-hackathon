import { defineField, defineType } from "sanity";

export const ProductType = defineType({
    title: "Product",
    type: "document",
    name: "product",
    fields: [
        defineField({
            title: "Product Name",
            type: "string",
            name: "itemName"
        }),
        defineField({
            title: "Product Price",
            type: "number",
            name: "actualPrice"
        }),
        defineField({
            title: "Discounted Product Price",
            type: "number",
            name: "discountedPrice"
        }),
        defineField({
            title: "Discount Percentage",
            type: "number",
            name: "discountpercent"
        }),
        defineField({
            title: "Product Ratings",
            type: "number",
            name: "rating"
        }),
        defineField({
            name: 'section',
            title: 'Product Section',
            type: 'string',
            options: {
                list: [
                    { title: 'New Arrivals', value: 'newArrivals' },
                    { title: 'Top Sellings', value: 'topSellings' },
                    { title: 'Recommended', value: 'recommended' },
                ]
            }
        }),
        defineField({
            name: "category",
            type: "array",
            title: "Product Category",
            of: [{ type: 'reference', to: { type: 'category' } }]
        }),
        defineField({
            title: "Featured Image 1",
            name: "image1",
            type: "image",
            options: {
                hotspot: true
            },

        })
    ]
})

// *[_type=='product']{category[]->{category}}

// *[_type == "product"]{
//   itemName,
//   "categories": category[]->category
// }
