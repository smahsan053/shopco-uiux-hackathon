/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};

export type Catalog = {
  _id: string;
  _type: "catalog";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  price?: number;
  category?: "tshirt" | "short" | "jeans" | "hoodie" | "shirt";
  discountPercent?: number;
  isNew?: boolean;
  colors?: Array<string>;
  sizes?: Array<string>;
  imageUrl?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Category = {
  _id: string;
  _type: "category";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  category?: string;
};

export type Product = {
  _id: string;
  _type: "product";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  itemName?: string;
  actualPrice?: number;
  discountedPrice?: number;
  discountpercent?: number;
  rating?: number;
  section?: "newArrivals" | "topSellings" | "recommended";
  category?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "category";
  }>;
  image1?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type AllSanitySchemaTypes = SanityImagePaletteSwatch | SanityImagePalette | SanityImageDimensions | SanityFileAsset | Geopoint | Slug | Catalog | Category | Product | SanityImageCrop | SanityImageHotspot | SanityImageAsset | SanityAssetSourceData | SanityImageMetadata;
export declare const internalGroqTypeReferenceTo: unique symbol;
// Source: ./src/sanity/helpers/queries.ts
// Variable: PRODUCTS_QUERY
// Query: *[_type == "product"]{      discountpercent,    _id,    "categories": category[]->category,    _updatedAt,    itemName,    _rev,    _type,    rating,    discountedPrice,    actualPrice,    _createdAt,    section,    image1,  }
export type PRODUCTS_QUERYResult = Array<{
  discountpercent: number | null;
  _id: string;
  categories: Array<string | null> | null;
  _updatedAt: string;
  itemName: string | null;
  _rev: string;
  _type: "product";
  rating: number | null;
  discountedPrice: number | null;
  actualPrice: number | null;
  _createdAt: string;
  section: "newArrivals" | "recommended" | "topSellings" | null;
  image1: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
}>;
// Variable: CATEGORIES_ID_QUERIES
// Query: *[_type=='category']{"id":_id, category}
export type CATEGORIES_ID_QUERIESResult = Array<{
  id: string;
  category: string | null;
}>;
// Variable: CATALOG_QUERY
// Query: *[_type=='catalog']
export type CATALOG_QUERYResult = Array<{
  _id: string;
  _type: "catalog";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  price?: number;
  category?: "hoodie" | "jeans" | "shirt" | "short" | "tshirt";
  discountPercent?: number;
  isNew?: boolean;
  colors?: Array<string>;
  sizes?: Array<string>;
  imageUrl?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
}>;
// Variable: PRODUCT_SEARCH_QUERY
// Query: *[_type=='catalog' && name match $searchParam] | order(name asc)
export type PRODUCT_SEARCH_QUERYResult = Array<{
  _id: string;
  _type: "catalog";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  name?: string;
  description?: string;
  price?: number;
  category?: "hoodie" | "jeans" | "shirt" | "short" | "tshirt";
  discountPercent?: number;
  isNew?: boolean;
  colors?: Array<string>;
  sizes?: Array<string>;
  imageUrl?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
}>;
// Variable: CATEGORIES_QUERY
// Query: *[_type=='catalog']{category} | order(name asc)
export type CATEGORIES_QUERYResult = Array<{
  category: "hoodie" | "jeans" | "shirt" | "short" | "tshirt" | null;
}>;

// Query TypeMap
import "@sanity/client";
declare module "@sanity/client" {
  interface SanityQueries {
    "*[_type == \"product\"]\n{  \n    discountpercent,\n    _id,\n    \"categories\": category[]->category,\n    _updatedAt,\n    itemName,\n    _rev,\n    _type,\n    rating,\n    discountedPrice,\n    actualPrice,\n    _createdAt,\n    section,\n    image1,\n  }\n": PRODUCTS_QUERYResult;
    "*[_type=='category']{\"id\":_id, category}": CATEGORIES_ID_QUERIESResult;
    "*[_type=='catalog']": CATALOG_QUERYResult;
    "*[_type=='catalog' && name match $searchParam] | order(name asc)": PRODUCT_SEARCH_QUERYResult;
    "*[_type=='catalog']{category} | order(name asc)": CATEGORIES_QUERYResult;
  }
}
