"use client";
import { X } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import Container from "../ui/Container";
import Link from "next/link";

function TopHeader() {
  const intervalIdRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const timeoutIdRef = useRef<NodeJS.Timeout | undefined>(undefined);
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(false);
    if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
        if (intervalIdRef.current) clearInterval(intervalIdRef.current);

        intervalIdRef.current = setInterval(() => {
          setOpen((prevState) => !prevState);
        }, 15000);
      } else {
        if (intervalIdRef.current) clearInterval(intervalIdRef.current);

        if (!open) {
          timeoutIdRef.current = setTimeout(() => {
            setOpen(true);
          }, 15000);
        }
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (intervalIdRef.current) clearInterval(intervalIdRef.current);
      if (timeoutIdRef.current) clearTimeout(timeoutIdRef.current);
    };
  }, [open]);

  return (
    <div
      className={`bg-black text-white w-full md:h-9 h-8 ${
        open ? "" : "-translate-y-9"
      } transition-transform duration-1000 ease-in-out`}
    >
      <Container className="relative flex flex-nowrap items-center justify-center h-full">
        <div className="flex items-center justify-center gap-2 text-center text-xs sm:text-sm">
          Sign up and get 20% off your first order.{" "}
          <Link href={"/"} className="font-medium underline">
            Sign Up Now
          </Link>
        </div>
        <Button
          variant={"ghost"}
          className="absolute hover:bg-transparent hover:text-white hover:scale-105 active:scale-95 hidden sm:flex right-0"
          onClick={handleClick}
        >
          <X className="text-xs sm:text-sm hover:text-gray-300" />
        </Button>
      </Container>
    </div>
  );
}

export default TopHeader;
