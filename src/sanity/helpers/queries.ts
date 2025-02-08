
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

export const PRODUCT_REVIEWS_QUERY = defineQuery(`*[_type == "reviews"]`)

export const MY_ORDERS_QUERY =
  defineQuery(`*[_type == 'order' && userId == $userId] | order(orderData desc){
...,products[]{
  ...,product->
}
}`);

export const ORDERS_QUERY = defineQuery(`*[_type == "order"]{
  _id,
  orderNumber,
  stripeCheckoutSessionId,
  stripeCustomerId,
  userId,
  customerName,
  email,
  stripePaymentIntentId,
  totalPrice,
  currency,
  amountDiscount,
  status,
  orderDate,
  products[] {
    quantity,
    product->{
      _id,
      title,
      price,
      image
    }
  }
} | order(orderDate desc)`)

export const USER_QUERY = defineQuery(`*[_type == "user"] {
  _id,
  firstName,
  lastName,
  userId,
  email,
  authMethod,
  role,
  createdAt
}`)

export const USER_SEARCH_QUERY = defineQuery(`*[_type == "user" && email == $email][0]`)

export const STATS_QUERY = defineQuery(`{
  "totalProducts": count(*[_type == "catalog"]),
  "totalOrders": count(*[_type == "order"]),
  "activeOrders": count(*[_type == "order" && status in ["pending", "paid", "shipped"]]),
  "totalUsers": count(*[_type == "user"]),
  "orders": *[_type == "order" && status in ["paid", "shipped", "delivered"]] { totalPrice }
}`)
