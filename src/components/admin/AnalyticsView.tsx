import { ORDERS_QUERY } from "@/sanity/helpers/queries";
import { client } from "@/sanity/lib/client";
import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

type OrderStatus = "cancelled" | "delivered" | "paid" | "pending" | "shipped";

type StatusCounts = Record<OrderStatus, number>;

const Dashboard = () => {
  const [orderData, setOrderData] = useState<
    { status: string; count: number }[]
  >([]);
  const [revenueData, setRevenueData] = useState<
    { month: string; revenue: number }[]
  >([]);
  const [productCategoryData, setProductCategoryData] = useState<
    { category: string; count: number }[]
  >([]);
  const [userRoleData, setUserRoleData] = useState<
    { role: string; count: number }[]
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch orders data (status & totalPrice)
        const orders = await client.fetch(ORDERS_QUERY);
        // Process Orders by Status
        const statusCounts: StatusCounts = orders
          .filter((order) => order.status !== null)
          .reduce(
            (acc, order) => {
              acc[order.status as OrderStatus] =
                (acc[order.status as OrderStatus] || 0) + 1;
              return acc;
            },
            { cancelled: 0, delivered: 0, paid: 0, pending: 0, shipped: 0 }
          );

        setOrderData(
          Object.entries(statusCounts).map(([status, count]) => ({
            status,
            count,
          }))
        );

        const revenueByMonth = orders.reduce(
          (acc, order) => {
            if (!order.orderDate) return acc;

            const month = new Date(order.orderDate).toLocaleString("default", {
              month: "short",
            });

            acc[month] = (acc[month] || 0) + (order.totalPrice || 0);
            return acc;
          },
          {} as Record<string, number>
        );

        setRevenueData(
          Object.entries(revenueByMonth).map(([month, revenue]) => ({
            month,
            revenue,
          }))
        );

        const products: { category: string | null }[] = await client.fetch(
          `*[_type == "catalog"]{ category }`
        );

        const categoryCounts = products.reduce(
          (acc: Record<string, number>, product) => {
            if (!product.category) return acc;
            acc[product.category] = (acc[product.category] || 0) + 1;
            return acc;
          },
          {} as Record<string, number>
        );
        setProductCategoryData(
          Object.entries(categoryCounts).map(([category, count]) => ({
            category,
            count: count as number,
          }))
        );

        const users: { role: string | null }[] = await client.fetch(
          `*[_type == "user"]{ role }`
        );

        const roleCounts = users.reduce(
          (acc: Record<string, number>, user) => {
            if (!user.role) return acc; // Skip users with no role
            acc[user.role] = (acc[user.role] || 0) + 1;
            return acc;
          },
          {} as Record<string, number> // Explicitly define type
        );

        setUserRoleData(
          Object.entries(roleCounts).map(([role, count]) => ({
            role,
            count: count as number, // Ensure count is treated as a number
          }))
        );
      } catch (error) {
        console.error("Error fetching data from Sanity:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
      {/* Orders by Status */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Orders by Status</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={orderData}>
            <XAxis dataKey="status" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Revenue Trend */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">Revenue Trend</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={revenueData}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Product Categories Distribution */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">
          Product Category Distribution
        </h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={productCategoryData}
              dataKey="count"
              nameKey="category"
              fill="#ff7300"
              label
            >
              {productCategoryData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    ["#8884d8", "#82ca9d", "#ffc658", "#d62728", "#ff7f0e"][
                      index
                    ]
                  }
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* User Role Distribution */}
      <div className="bg-white p-4 rounded shadow">
        <h2 className="text-lg font-semibold mb-4">User Role Distribution</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={userRoleData}
              dataKey="count"
              nameKey="role"
              fill="#0088FE"
              label
            >
              {userRoleData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={["#0088FE", "#00C49F"][index]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
