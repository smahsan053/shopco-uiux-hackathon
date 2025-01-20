import { sanityFetch } from '@/sanity/lib/live'
import { CATALOG_QUERY, CATEGORIES_ID_QUERIES, CATEGORIES_QUERY, PRODUCT_SEARCH_QUERY, PRODUCTS_QUERY } from './queries'

export default async function getAllProducts() {
    try {
        const products = await sanityFetch({
            query: PRODUCTS_QUERY
        })
        return products.data || []
    } catch (error) {
        console.error('Products fetching Error:', error)
        return []
    }
}

export async function getCategoriesId() {
    try {
        const products = await sanityFetch({
            query: CATEGORIES_ID_QUERIES
        })
        return products.data || []
    } catch (error) {
        console.error('Products fetching Error:', error)
        return []
    }
}

export async function getProductsCatalog() {
    try {
        const catalog = await sanityFetch({
            query: CATALOG_QUERY
        })
        return catalog.data || []

    } catch (error) {
        console.error('Products fetching Error:', error)
        return []
    }
}

export const searchCatalogsByName = async (searchParam: string) => {
    try {
        const products = await sanityFetch({
            query: PRODUCT_SEARCH_QUERY,
            params: {
                searchParam: searchParam,
            },
        });
        return products?.data || null

    } catch (error) {
        console.error("Fetching product by name Error:", error)
        return []
    }
}

export const getAllCategory = async () => {
    try {
        const categories = await sanityFetch({
            query: CATEGORIES_QUERY,
        })
        return categories.data || []
    } catch (error) {
        console.error("All categories fetching Error:", error)
        return []
    }
}