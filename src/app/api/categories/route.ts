import { client } from '@/sanity/lib/client';
import { NextResponse } from 'next/server';

interface ProductType {
    category: string
}
export async function POST(request: Request) {
    try {
        const data = await request.json();
        await data.map((item: ProductType) => client.create({
            _type: "category",
            category: item.category,
        }))
        return NextResponse.json({ message: 'Categories created successfully', data });
    } catch (error) {
        return NextResponse.json({ error: `Failed to create categories ${error}` }, { status: 500 });
    }
}
