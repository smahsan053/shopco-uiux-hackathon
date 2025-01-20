
import { defineQuery } from 'next-sanity'

// export const PRODUCTS_QUERY = defineQuery(`*[_type=="product"] | order(name asc)`)
export const PRODUCTS_QUERY = defineQuery(`*[_type == "product"]
{  
    discountpercent,
    _id,
    "categories": category[]->category,
    _updatedAt,
    itemName,
    _rev,
    _type,
    rating,
    discountedPrice,
    actualPrice,
    _createdAt,
    section,
    image1,
  }
`)

export const CATEGORIES_ID_QUERIES = defineQuery(`*[_type=='category']{"id":_id, category}`)

export const CATALOG_QUERY = defineQuery(`*[_type=='catalog']`)

export const PRODUCT_SEARCH_QUERY = defineQuery(`*[_type=='catalog' && name match $searchParam] | order(name asc)`)

export const CATEGORIES_QUERY = defineQuery(`*[_type=='catalog']{category} | order(name asc)`)
