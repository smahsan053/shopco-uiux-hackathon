"use client";
import { CATALOG_QUERY } from "@/sanity/helpers/queries";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { CATALOG_QUERYResult } from "sanity.types";

type ProductType = CATALOG_QUERYResult[number];

export const ProductManagement = () => {
  const [products, setProducts] = useState<CATALOG_QUERYResult>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortField, setSortField] = useState<keyof ProductType>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await client.fetch<CATALOG_QUERYResult>(CATALOG_QUERY);
        setProducts(data || []);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSort = (field: keyof ProductType) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredProducts = products
    .filter((product) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        product.name?.toLowerCase().includes(searchLower) ||
        product.category?.toLowerCase().includes(searchLower);

      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      const aValue = a[sortField] || "";
      const bValue = b[sortField] || "";

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const handleDeleteProduct = (productId: string) => {
    setProducts(products.filter((product) => product._id !== productId));
  };

  if (loading) {
    return <div className="p-4 text-center">Loading products...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search products..."
          className="p-2 border border-gray-300 rounded-lg flex-grow bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select
          className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={selectedCategory}
          onChange={handleCategoryFilter}
        >
          <option value="all">All Categories</option>
          <option value="tshirt">T-Shirt</option>
          <option value="short">Short</option>
          <option value="jeans">Jeans</option>
          <option value="hoodie">Hoodies</option>
          <option value="shirt">Shirt</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { label: "Product", field: "name" as const },
                { label: "Category", field: "category" as const },
                { label: "Price", field: "price" as const },
                { label: "Stock", field: "sizes" as const },
                { label: "Actions", field: null },
              ].map((header) => (
                <th
                  key={header.label}
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-100"
                  onClick={() => header.field && handleSort(header.field)}
                >
                  {header.label}
                  {sortField === header.field && (
                    <span className="ml-2">
                      {sortDirection === "asc" ? "↑" : "↓"}
                    </span>
                  )}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
              <tr key={product._id}>
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <Image
                      src={urlFor(product.imageUrl!).url()}
                      alt={product.name!}
                      className="w-10 h-10 object-cover rounded mr-4"
                      width={40}
                      height={40}
                    />
                    <div>
                      <p className="font-medium text-black">{product.name}</p>
                      <p className="text-gray-600 text-sm">
                        {product.category}
                      </p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 capitalize">{product.category}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.sizes?.length} variants</td>
                <td className="px-6 py-4 space-x-2">
                  <button className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    onClick={() => handleDeleteProduct(product._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing {filteredProducts.length} of {products.length} results
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};
