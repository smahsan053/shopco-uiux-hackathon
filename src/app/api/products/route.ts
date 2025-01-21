import { getCategoriesId } from '@/sanity/helpers';
import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

interface ProductType {
    itemName: string,
    actualPrice: number,
    discountedPrice: number,
    discountpercent: number,
    rating: number,
    section: string
    category: string[]
    image1: string
}

export async function POST(request: Request) {
    const categories = await getCategoriesId()

    try {
        const data = await request.json();
        console.log(data);
        await data.map(async (item: ProductType) => {

            return client.create({
                _type: "product",
                itemName: item.itemName,
                actualPrice: item.actualPrice,
                discountedPrice: item.discountedPrice,
                discountpercent: item.discountedPrice,
                rating: item.rating,
                section: item.section,
                category: categories.map((category: { id: string, category: string | null }, index: number) => (item.category.filter((itemCategory) => (itemCategory === category.category)).map(() => ({ _type: "reference", _ref: category.id, _key: `${category.id}-${index}` })))).flat(),
                image1: item.image1 ? {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: item.image1
                    },
                } : null,
            })
        })
        // console.log("itemName", itemName);
        // Process the data as needed

        console.log("Product Submitted");
        return NextResponse.json({ message: 'Product created successfully', data });
    } catch (error) {
        return NextResponse.json({ error: `Failed to create products ${error}` }, { status: 500 });
    }
}
