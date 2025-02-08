import { sanityFetch } from '@/sanity/lib/live'
import { CATALOG_QUERY, CATEGORIES_ID_QUERIES, CATEGORIES_QUERY, PRODUCT_SEARCH_QUERY, PRODUCTS_QUERY, PRODUCT_REVIEWS_QUERY, MY_ORDERS_QUERY, USER_SEARCH_QUERY, ORDERS_QUERY } from './queries'

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

export const getProductReviews = async () => {
    try {
        const reviews = await sanityFetch({
            query: PRODUCT_REVIEWS_QUERY,
        })
        return reviews.data || []
    } catch (error) {
        console.error("All reviews fetching Error:", error)
        return []
    }
}

export const getMyOrders = async (userId: string) => {
    if (!userId) {
        throw new Error("User ID is required");
    }

    try {
        const orders = await sanityFetch({
            query: MY_ORDERS_QUERY,
            params: { userId },
        });
        return orders?.data || [];
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};

export const getAllOrders = async () => {
    try {
        const orders = await sanityFetch({
            query: ORDERS_QUERY,
        });
        return orders?.data || [];
    } catch (error) {
        console.error("Error fetching orders:", error);
        return [];
    }
};

export const getUserFromEmail = async (email: string) => {
    if (!email) {
        throw new Error("Email is required");
    }

    try {
        const orders = await sanityFetch({
            query: USER_SEARCH_QUERY,
            params: { email },
        });
        return orders?.data || [];
    } catch (error) {
        console.error("Error fetching user:", error);
        return [];
    }
};