import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex justify-between md:justify-center items-center md:gap-10 my-6 w-screen relative md:px-10">
      <div className="flex items-center justify-center gap-3">
        <div className="md:hidden ml-10">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`text-black mt-3`}
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </div>
        <h1 className="text-black text-3xl font-bold">SHOP.CO</h1>
      </div>
      <ul className="hidden md:flex gap-6 text-nowrap">
        <li>
          <Link className="flex justify-center items-center gap-1" href={"/"}>
            Shop{" "}
            <Image
              aria-hidden
              src={"/header/dropdown.svg"}
              alt="cross"
              width={16}
              height={16}
            />
          </Link>
        </li>
        <li>
          <Link href={"/"}>On Sale</Link>
        </li>
        <li>
          <Link href={"/"}>New Arrival</Link>
        </li>
        <li>
          <Link href={"/"}>Brands</Link>
        </li>
      </ul>

      <div className="flex justify-center items-center gap-12 md:gap-10 w-[48%]">
        <div className="relative md:w-full">
          {/* Input field for larger screens */}
          <input
            type="text"
            placeholder="Search for products..."
            className="hidden md:block md:w-full px-10 py-3 text-sm border rounded-full focus:outline-none bg-[#F0F0F0] focus:ring-2 focus:ring-blue-500"
          />

          {/* Search icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 opacity-100 md:opacity-40 cursor-pointer"
          >
            <path
              d="M21.7959 20.2041L17.3437 15.75C18.6787 14.0104 19.3019 11.8282 19.087 9.64607C18.8722 7.4639 17.8353 5.44516 16.1867 3.99937C14.5382 2.55357 12.4014 1.78899 10.2098 1.86071C8.01829 1.93244 5.93607 2.8351 4.38558 4.38559C2.83509 5.93608 1.93243 8.0183 1.8607 10.2098C1.78898 12.4014 2.55356 14.5382 3.99936 16.1867C5.44515 17.8353 7.46389 18.8722 9.64606 19.087C11.8282 19.3019 14.0104 18.6787 15.75 17.3438L20.2059 21.8006C20.3106 21.9053 20.4348 21.9883 20.5715 22.0449C20.7083 22.1016 20.8548 22.1307 21.0028 22.1307C21.1508 22.1307 21.2973 22.1016 21.4341 22.0449C21.5708 21.9883 21.695 21.9053 21.7997 21.8006C21.9043 21.696 21.9873 21.5717 22.044 21.435C22.1006 21.2983 22.1298 21.1517 22.1298 21.0037C22.1298 20.8558 22.1006 20.7092 22.044 20.5725C21.9873 20.4358 21.9043 20.3115 21.7997 20.2069L21.7959 20.2041ZM4.12499 10.5C4.12499 9.23915 4.49888 8.0066 5.19938 6.95824C5.89987 5.90988 6.89551 5.09278 8.06039 4.61027C9.22527 4.12776 10.5071 4.00151 11.7437 4.2475C12.9803 4.49348 14.1162 5.10064 15.0078 5.9922C15.8994 6.88376 16.5065 8.01967 16.7525 9.2563C16.9985 10.4929 16.8722 11.7747 16.3897 12.9396C15.9072 14.1045 15.0901 15.1001 14.0418 15.8006C12.9934 16.5011 11.7608 16.875 10.5 16.875C8.80977 16.8733 7.18927 16.2011 5.99411 15.0059C4.79894 13.8107 4.12673 12.1902 4.12499 10.5Z"
              fill="black"
            />
          </svg>
        </div>

        {/* Cart and User icons */}
        <div className="flex gap-3">
          <Link href={"/cart"}>
            <Image
              aria-hidden
              src={"/header/cart.svg"}
              alt="cart"
              width={24}
              height={24}
            />
          </Link>
          <Link href={"/"}>
            <Image
              aria-hidden
              src={"/header/user.svg"}
              alt="user"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
