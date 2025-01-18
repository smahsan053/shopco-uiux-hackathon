import { sanityFetch } from '@/sanity/lib/live'
import { CATALOG_QUERY, CATEGORIES_ID_QUERIES, PRODUCTS_QUERY } from './queries'

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