"use client";
import { STATS_QUERY } from "@/sanity/helpers/queries";
import { client } from "@/sanity/lib/client";
import { BarChart, Package, ShoppingCart, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { STATS_QUERYResult } from "sanity.types";

type StatsType = Omit<STATS_QUERYResult, "orders"> & {
  totalRevenue: number;
};
export const DashboardOverview = () => {
  const [stats, setStats] = useState<StatsType | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      const data = await client.fetch(STATS_QUERY);
      const { orders, ...rest } = data;
      const totalRevenue = orders.reduce(
        (sum, order) => sum + (order.totalPrice || 0),
        0
      );
      setStats({ ...rest, totalRevenue });
    };

    fetchStats();
  }, []);

  if (!stats) return <div>Loading stats...</div>;

  const formattedStats = [
    { label: "Total Products", value: stats.totalProducts, icon: Package },
    { label: "Active Orders", value: stats.activeOrders, icon: ShoppingCart },
    { label: "Registered Users", value: stats.totalUsers, icon: Users },
    {
      label: "Total Revenue",
      value: `$${stats.totalRevenue?.toLocaleString() || 0}`,
      icon: BarChart,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {formattedStats.map(({ label, value, icon: Icon }) => (
        <div
          key={label}
          className="bg-white p-6 rounded-lg border border-gray-200"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">{label}</p>
              <p className="text-2xl font-bold text-black mt-2">{value}</p>
            </div>
            <Icon className="text-gray-400" size={32} />
          </div>
        </div>
      ))}
    </div>
  );
};
