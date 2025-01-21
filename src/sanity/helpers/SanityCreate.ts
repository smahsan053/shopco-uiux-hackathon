import ProductsData from "../../../ProductsData.json" with { type: 'json' }
import CategoriesData from "../../../CategoriesData.json" with { type: 'json' }
import path, { basename } from "path";
import { createReadStream } from "fs";
import { createClient } from "next-sanity";

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
const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: process.env.SANITY_API_TOKEN,
    useCdn: true,
})


const UploadImage = async (imageName: string) => {
    try {
        const filePath = path.join(process.cwd(), 'public', 'item', `${imageName}`);
        const imageFile = createReadStream(filePath);
        const imageAsset = await client.assets.upload("image", imageFile, { filename: basename(filePath) })
        console.log(`Image Uploaded Successfully: ${imageAsset._id}`);
        return imageAsset._id
    } catch (error) {
        return `Failed to upload image, ${error}`

    }
}

const SanityCreate = async (route: string) => {
    let data;
    if (route === "products") {
        data = await Promise.all(ProductsData.map(async (item) => ({ ...item, image1: await UploadImage(item.image1) })))
    } else if (route === "categories") {
        data = CategoriesData
    } else if (route === "api") {
        const response = await fetch("https://template1-neon-nu.vercel.app/api/products")
        data = await response.json()
        data = await Promise.all(data.map(async (productData: ProductType) => {
            try {
                const imageResponse = await fetch(productData.imageUrl);

                if (!imageResponse.ok) {
                    throw new Error(`Failed to fetch image: ${productData.imageUrl}`);
                }

                const arrayBuffer = await imageResponse.arrayBuffer();
                const imageBuffer = Buffer.from(arrayBuffer);
                const imageAsset = await client.assets.upload("image", imageBuffer);

                return {
                    ...productData,
                    imageUrl: imageAsset._id
                };
            } catch (error) {
                console.error(`Error processing product ${productData.name}:`, error);
                return productData;
            }
        }))
    } else {
        throw new Error("Invalid route provided.");
    }

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000"}/api/${route === "api" ? "catalog" : route}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
    }).then((response) => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    }).then((res) => {
        console.log("Products submitted successfully:", res);
    }).catch((error) => {
        console.error("Error submitting products:", error);
    })
}

// SanityCreate(route)
const args = process.argv.slice(2);
const route = args[0];

if (route) {
    SanityCreate(route);
} else {
    console.error("Please provide a route as an argument.");
}
