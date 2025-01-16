import { type SchemaTypeDefinition } from 'sanity'
import { ProductType } from './ProductType'
import { CategoryType } from './CategoryType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [ProductType, CategoryType]
}
