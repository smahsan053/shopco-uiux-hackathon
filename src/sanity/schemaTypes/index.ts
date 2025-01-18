import { type SchemaTypeDefinition } from 'sanity'
import { ProductType } from './ProductType'
import { CategoryType } from './CategoryType'
import { ProductCatalog } from './ProductCatalog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductType, CategoryType, ProductCatalog]
}
