"use client";
import { Search } from "lucide-react";
import React, { useRef, useState } from "react";

function SearchBar() {
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Handle click on search icon
  const handleClick = () => {
    setOpen(true); // Show the input field
    setTimeout(() => {
      inputRef.current?.focus(); // Focus the input field after it is rendered
    }, 0);
  };

  return (
    <>
      <Search
        className={`sm:absolute sm:text-gray-500 left-3 top-3 cursor-pointer hover:scale-105 active:scale-95 ${
          open ? "hidden" : "visible"
        }`}
        onClick={handleClick} // When the icon is clicked, it will open the input field
      />
      <form
        action="/search"
        className={`sm:flex flex-1 items-center ${open ? "visible" : "hidden"}`}
      >
        <input
          autoFocus={open} // Set autoFocus based on the open state
          type="text"
          id="search"
          name="search"
          ref={inputRef} // Reference for the input field
          onBlur={() => setOpen(false)} // When input loses focus, set 'open' to false
          placeholder="Search for products..."
          className="bg-[#F0F0F0] rounded-full flex-1 px-1 xs:px-3 sm:px-12 py-3 w-32 xs:w-44 sm:w-auto placeholder:text-xs sm:placeholder:text-base"
        />
      </form>
    </>
  );
}

export default SearchBar;
