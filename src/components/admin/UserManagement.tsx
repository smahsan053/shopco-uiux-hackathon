import { USER_QUERY } from "@/sanity/helpers/queries";
import { client } from "@/sanity/lib/client";
import React, { useState, useEffect } from "react";
import { USER_QUERYResult } from "sanity.types";

type UserType = USER_QUERYResult[number];

function UserManagement() {
  const [users, setUsers] = useState<USER_QUERYResult>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");
  const [sortField, setSortField] = useState<keyof UserType>("firstName");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await client.fetch<USER_QUERYResult>(USER_QUERY);
        setUsers(data || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleRoleFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedRole(e.target.value);
  };

  const handleSort = (field: keyof UserType) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const filteredUsers = users
    .filter((user) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        user.firstName?.toLowerCase().includes(searchLower) ||
        user.lastName?.toLowerCase().includes(searchLower) ||
        user.email?.toLowerCase().includes(searchLower);

      const matchesRole = selectedRole === "all" || user.role === selectedRole;
      return matchesSearch && matchesRole;
    })
    .sort((a, b) => {
      const aValue = a[sortField] || "";
      const bValue = b[sortField] || "";

      if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
      if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });

  const handleDeleteUser = (userId: string) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  if (loading) {
    return <div className="p-4 text-center">Loading users...</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-4 flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search users..."
          className="p-2 border border-gray-300 rounded-lg flex-grow bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={searchQuery}
          onChange={handleSearch}
        />
        <select
          className="p-2 border border-gray-300 rounded-lg bg-white text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          value={selectedRole}
          onChange={handleRoleFilter}
        >
          <option value="all">All Roles</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
        </select>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                { label: "Name", field: "firstName" as const },
                { label: "Email", field: "email" as const },
                { label: "Role", field: "role" as const },
                { label: "Auth Method", field: "authMethod" as const },
                { label: "Joining Date", field: "createdAt" as const },
                { label: "Actions", field: null }, // No sorting for actions
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
            {filteredUsers.map((user) => (
              <tr key={user._id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap capitalize">
                  {user.role}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      user.authMethod === "email"
                        ? "bg-blue-100 text-blue-800"
                        : user.authMethod === "github"
                          ? "bg-gray-100 text-gray-800"
                          : "bg-red-100 text-red-800"
                    }`}
                  >
                    {user.authMethod}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {new Date(user.createdAt!).toLocaleDateString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-indigo-600 hover:text-indigo-900 mr-4"
                    onClick={() => {
                      /* Implement edit functionality */
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="text-red-600 hover:text-red-900"
                    onClick={() => handleDeleteUser(user._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <div className="text-sm text-gray-700">
          Showing {filteredUsers.length} of {users.length} results
        </div>
        <div className="space-x-2">
          <button className="px-3 py-1 border rounded-md">Previous</button>
          <button className="px-3 py-1 border rounded-md">Next</button>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;
