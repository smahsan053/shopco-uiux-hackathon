import { client } from "@/sanity/lib/client";
import { NextRequest, NextResponse } from "next/server";

interface ProductType {
    name: string,
    price: number,
    category: string,
    discountPercent: number,
    isNew: boolean,
    colors: string[],
    sizes: string[],
    description: string,
    imageUrl: string

}
export async function POST(request: NextRequest) {
    try {
        const data = await request.json()
        await data.map((product: ProductType) => {
            return client.create({
                _type: 'catalog',
                name: product.name,
                price: product.price,
                category: product.category,
                discountPercent: product.discountPercent,
                isNew: product.isNew,
                colors: product.colors,
                sizes: product.sizes,
                description: product.description,
                imageUrl: product.imageUrl ? {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: product.imageUrl
                    },
                } : null,
            })
        })
        return NextResponse.json({ message: 'Catalog created successfully', data });

    } catch (error) {
        return NextResponse.json({ error: `Failed to create catalog ${error}` }, { status: 500 });
    }
}
