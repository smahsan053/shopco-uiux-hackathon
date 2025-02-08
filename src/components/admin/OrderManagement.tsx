"use client";
import { ORDERS_QUERY } from "@/sanity/helpers/queries";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { ORDERS_QUERYResult } from "sanity.types";

type OrderType = ORDERS_QUERYResult[number];

export const OrderManagement = () => {
  const [orders, setOrders] = useState<ORDERS_QUERYResult>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [sortField, setSortField] = useState<keyof OrderType>("orderDate");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(true);

  const statusStyles = {
    pending: "bg-yellow-100 text-yellow-800",
    paid: "bg-blue-100 text-blue-800",
    shipped: "bg-green-100 text-green-800",
    delivered: "bg-gray-100 text-gray-800",
    cancelled: "bg-red-100 text-red-800",
  };

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const data = await client.fetch<ORDERS_QUERYResult>(ORDERS_QUERY);
        setOrders(data || []);
      } catch (error) {
        console.error("Error fetching orders:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(e.target.value);
  };

  const handleSort = (field: keyof OrderType) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredOrders = orders
    .filter((order) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        order.customerName?.toLowerCase().includes(searchLower) ||
        order.orderNumber?.toLowerCase().includes(searchLower) ||
        order.email?.toLowerCase().includes(searchLower);

      const matchesStatus =
        selectedStatus === "all" || order.status === selectedStatus;
      return matchesSearch && matchesStatus;
    })
    .sort((a, b) => {
      const aValue = a[sortField] || "";
      const bValue = b[sortField] || "";

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  if (loading) {
    return <div className="p-4 text-center">Loading orders...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search orders..."
          className="p-2 border border-gray-300 rounded-lg flex-grow bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select
          className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={selectedStatus}
          onChange={handleStatusFilter}
        >
          <option value="all">All Statuses</option>
          <option value="pending">Pending</option>
          <option value="paid">Paid</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { label: "Order #", field: "orderNumber" as const },
                { label: "Customer", field: "customerName" as const },
                { label: "Status", field: "status" as const },
                { label: "Total", field: "totalPrice" as const },
                { label: "Date", field: "orderDate" as const },
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
            {filteredOrders.map((order) => (
              <tr key={order._id}>
                <td className="px-6 py-4 font-medium text-black">
                  {order.orderNumber}
                </td>
                <td className="px-6 py-4">
                  <p className="text-black">{order.customerName}</p>
                  <p className="text-gray-600 text-sm">{order.email}</p>
                </td>
                <td className="px-6 py-4">
                  <select
                    value={order.status!}
                    onChange={(e) => {
                      const newStatus = e.target.value as OrderType["status"];
                      setOrders(
                        orders.map((o) =>
                          o._id === order._id ? { ...o, status: newStatus } : o
                        )
                      );
                    }}
                    className={`px-2 py-1 rounded text-sm ${statusStyles[order.status!]}`}
                  >
                    {[
                      "pending",
                      "paid",
                      "shipped",
                      "delivered",
                      "cancelled",
                    ].map((status) => (
                      <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)}
                      </option>
                    ))}
                  </select>
                </td>
                <td className="px-6 py-4">${order.totalPrice}</td>
                <td className="px-6 py-4">
                  {new Date(order.orderDate!).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing {filteredOrders.length} of {orders.length} results
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
};
