import ProductsData from "../../../ProductsData.json" with { type: 'json' }
import CategoriesData from "../../../CategoriesData.json" with { type: 'json' }
import path, { basename } from "path";
import { createReadStream } from "fs";
import { createClient } from "next-sanity";

const client = createClient({
    projectId: "k8bpzkxi",
    dataset: "production",
    apiVersion: "2025-01-10",
    token: "skMuc5AKQcF3kAfnEkSeq4ZaZ7QmoYaYsRykHeOChitUCKAyq7q12mtxLwk9QdnEDa5QSBy1OwHnqTny9BZN0LFVR9q6on6hkhXH5JgDatt5v9afmZONMqaWc9EaGKMoEkRlQppQJrEIiXqki1m9xDz0JBk6ZXtA15U0ei30TJQ7SUwdAtfn",
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
    } else {
        throw new Error("Invalid route provided.");
    }

    fetch(`http://localhost:3000/api/${route}`, {
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
