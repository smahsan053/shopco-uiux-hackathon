import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    authMethod: "email" | "google" | "github";
    role?: "user" | "admin";
    joiningDate: string
}

interface UserStore {
    user: User | null;
    isAdmin: boolean;
    setUser: (user: User | null) => void;
    updateUser: (updatedData: Partial<User>) => void;
    clearUser: () => void;
    getUser: () => User | null;
    getUserId: () => string | null;
    setAdmin: (isAdmin: boolean) => void;
}

export const useUserStore = create(
    persist<UserStore>(
        (set, get) => ({
            user: null,
            isAdmin: false,

            setUser: (user) => {
                if (user) {
                    const isAdmin = user.email === "syedmahsan053@gmail.com";
                    set({ user: { ...user, role: isAdmin ? "admin" : "user" } });
                } else {
                    set({ user: null });
                }
            },

            updateUser: (updatedData) =>
                set((state) => ({
                    user: state.user ? { ...state.user, ...updatedData } : null,
                })),

            getUser: () => get().user,

            clearUser: () => set({ user: null }),

            getUserId: () => get().user?.id || null,

            setAdmin: (isAdmin) => set({ isAdmin }),
        }),
        {
            name: "user-store", // Storage key
        }
    )
);
