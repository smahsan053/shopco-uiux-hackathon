"use client";
import { logout } from "@/lib/auth-actions";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { toast } from "react-toastify";
import { useUserStore } from "@/store/UserStore";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  authMethod: "email" | "google" | "github";
  role?: "user" | "admin";
  joiningDate: string;
  image?: string;
}

interface UserProfileProps {
  user: User | undefined;
}

const UserProfile: React.FC<UserProfileProps> = () => {
  const [showProfile, setShowProfile] = useState(false);
  const clearUser = useUserStore((state) => state.clearUser);
  const setUser = useUserStore((state) => state.setUser);
  const user = useUserStore((state) => state.getUser());
  const setAdmin = useUserStore((state) => state.setAdmin);

  const getRandomColor = () => {
    const colors = [
      "#FF5733",
      "#33FF57",
      "#3357FF",
      "#FF33A1",
      "#FF8C00",
      "#8BFF33",
    ];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  };
  const handleLogout = () => {
    clearUser();
    setUser(null);
    setShowProfile(false);
    setAdmin(false);
    toast.success("Logged out successfully!");
  };
  return (
    <div className=" relative">
      {
        <Button
          className="avatar"
          style={{
            backgroundColor: getRandomColor(),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            color: "#fff",
            fontSize: "18px",
            fontWeight: "bold",
          }}
          onClick={() => setShowProfile(!showProfile)}
        >
          {user?.firstName.charAt(0).toUpperCase()}
        </Button>
      }
      {showProfile && (
        <div className="bg-black text-white rounded-lg p-6 shadow-lg min-w-96 absolute top-16 right-3">
          <div className="text-center mb-6">
            <h1 className="text-3xl font-semibold">
              Welcome, {user?.firstName}
            </h1>
          </div>
          <div className="flex flex-col items-center space-y-6">
            <div className="relative">
              {
                <div
                  className="avatar"
                  style={{
                    backgroundColor: getRandomColor(),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "96px",
                    height: "96px",
                    borderRadius: "50%",
                    color: "#fff",
                    fontSize: "48px",
                    fontWeight: "bold",
                  }}
                >
                  {user?.firstName.charAt(0).toUpperCase()}
                </div>
              }
            </div>
            <div className="text-center">
              <h2 className="text-xl font-medium mb-4">Account Details</h2>
              <p className="mb-2">
                <strong className="text-gray-400">Email:</strong> {user?.email}
              </p>
              <p className="mb-2">
                <strong className="text-gray-400">Date of Joining:</strong>{" "}
                {user?.joiningDate
                  ? new Date(user.joiningDate).toLocaleDateString()
                  : "N/A"}
              </p>
              <button
                className="bg-white text-gray-800 py-2 px-4 rounded-lg hover:bg-gray-300 transition duration-300"
                onClick={() => {
                  handleLogout();
                  logout();
                }}
              >
                Logout{" "}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
