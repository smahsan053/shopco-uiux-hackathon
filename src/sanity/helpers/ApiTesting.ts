import { createClient } from "next-sanity"

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
    projectId: "k8bpzkxi",
    dataset: "production",
    apiVersion: "2025-01-10",
    token: "skMuc5AKQcF3kAfnEkSeq4ZaZ7QmoYaYsRykHeOChitUCKAyq7q12mtxLwk9QdnEDa5QSBy1OwHnqTny9BZN0LFVR9q6on6hkhXH5JgDatt5v9afmZONMqaWc9EaGKMoEkRlQppQJrEIiXqki1m9xDz0JBk6ZXtA15U0ei30TJQ7SUwdAtfn",
    useCdn: true,
})
const APITest = async () => {
    const response = await fetch("https://template1-neon-nu.vercel.app/api/products")
    const data = await response.json()
    const res = await Promise.all(data.map(async (item: ProductType) => {
        const imageResponse = await fetch(item.imageUrl)        
        const arrayBuffer = await imageResponse.arrayBuffer()
        const buffer = Buffer.from(arrayBuffer)
        const imageAsset = await client.assets.upload("image", buffer)
        console.log(imageAsset);
        return { ...item, imageUrl: imageAsset._id }

    }))
    console.log(res);

}
APITest()