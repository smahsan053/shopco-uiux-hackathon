'use client'
import { useState } from "react";
import {
  BarChart,
  LayoutDashboard,
  Package,
  Users,
  ShoppingCart,
} from "lucide-react";
import { DashboardOverview } from "@/components/admin/DashboardOverview";
import { ProductManagement } from "@/components/admin/ProductManagement";
import { OrderManagement } from "@/components/admin/OrderManagement";
import UserManagement from "@/components/admin/UserManagement";
import AnalyticsView from "@/components/admin/AnalyticsView";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
import { useUserStore } from "@/store/UserStore";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");
  const user = useUserStore((state) => state.getUser());

  if (user?.role !== "admin") {
    toast("You are not authorized to view Admin Panel");
    redirect("/");
  }

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <aside className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="mb-8">
          <h2 className="text-xl font-bold text-black">SHOP.CO Admin</h2>
        </div>
        <nav>
          {[
            { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
            { id: "products", icon: Package, label: "Products" },
            { id: "orders", icon: ShoppingCart, label: "Orders" },
            { id: "users", icon: Users, label: "Users" },
            { id: "analytics", icon: BarChart, label: "Analytics" },
          ].map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`w-full flex items-center space-x-2 p-3 rounded-lg ${
                activeTab === id
                  ? "bg-black text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      <main className="flex-1 p-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl font-bold text-black mb-8 capitalize">
            {activeTab}
          </h1>

          {activeTab === "dashboard" && <DashboardOverview />}
          {activeTab === "products" && <ProductManagement />}
          {activeTab === "orders" && <OrderManagement />}
          {activeTab === "users" && <UserManagement />}
          {activeTab === "analytics" && <AnalyticsView />}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
