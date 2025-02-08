"use client";
import React, { useEffect } from "react";
import Container from "../ui/Container";
import { Menu, ShoppingCart } from "lucide-react";
import SearchBar from "./SearchBar";
import Link from "next/link";
// import SignInButton from "./SignInButton";
// import { auth } from "@/auth";
import UserProfile from "./UserProfile";
import AuthSwitcher from "./AuthSwitcher";
import { useUserStore } from "@/store/UserStore";

function Header() {
  const user = useUserStore((state) => state.getUser());
  const setUser = useUserStore((state) => state.setUser);
  const isAdmin = useUserStore((state) => state.isAdmin);

  useEffect(() => {
    const userInterval = setInterval(() => {
      const userData = useUserStore.getState().getUser();
      if (userData) {
        setUser(userData);
        clearInterval(userInterval);
      }
    }, 500);

    return () => clearInterval(userInterval);
  }, [setUser]);

  return (
    <div className="sticky top-0 bg-white z-50 py-5 md:py-6 ">
      <Container className="flex justify-between md:justify-start items-center h-12 gap-1 sm:gap-4 md:gap-10 w-full ">
        <div className="flex items-center gap-1 sm:gap-4">
          <div className="drawer flex md:hidden">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="drawer-button cursor-pointer"
              >
                <Menu />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-white text-base-content min-h-full w-64 p-4">
                <li>
                  <Link
                    href={"/shop"}
                    className="flex flex-nowrap text-black hover:underline active:scale-95"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/newarrivals"}
                    className="hover:underline text-black active:scale-95"
                  >
                    New Arrivals
                  </Link>
                </li>
                <li>
                  <Link
                    href={"/orders"}
                    className="hover:underline text-black active:scale-95"
                  >
                    Your Orders
                  </Link>
                </li>

                {isAdmin && (
                  <li>
                    <Link
                      href={"/dashboard"}
                      className="hover:underline text-black active:scale-95"
                    >
                      Admin Dashboard
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
          <h1 className="font-integralcf font-bold xs:text-xl md:text-3xl mb-1 md:mb-2">
            <Link href={"/"}>SHOP.CO</Link>
          </h1>
        </div>
        <ul className="lg:flex gap-6 text-base hidden">
          <li>
            <Link
              href={"/shop"}
              className="flex flex-nowrap hover:underline active:scale-95"
            >
              Shop
            </Link>
          </li>
          <li>
            <Link
              href={"/newarrivals"}
              className="hover:underline active:scale-95"
            >
              New Arrivals
            </Link>
          </li>
          <li>
            <Link href={"/orders"} className="hover:underline active:scale-95">
              Your Orders
            </Link>
          </li>
          {isAdmin && (
            <li>
              <Link
                href={"/dashboard"}
                className="hover:underline active:scale-95"
              >
                Admin Dashboard
              </Link>
            </li>
          )}
        </ul>
        <div className="flex sm:flex-1 gap-1 sm:gap-3 md:gap-10 justify-center items-center relative">
          <SearchBar />
          <div className="flex gap-2 sm:gap-3 justify-center items-center">
            {" "}
            <Link href={"/cart"}>
              <ShoppingCart className="cursor-pointer hover:scale-105 active:scale-95" />
            </Link>
            {user?.id ? <UserProfile user={user} /> : <AuthSwitcher />}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
