import { type SchemaTypeDefinition } from 'sanity'
import { ProductType } from './ProductType'
import { CategoryType } from './CategoryType'
import { ProductCatalog } from './ProductCatalog'
import { ReviewsSchema } from './ReviewsSchema'
import { OrderType } from './OrderType'
import { UserSchema } from './UserType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductType, CategoryType, ProductCatalog, ReviewsSchema, OrderType, UserSchema ]
}
