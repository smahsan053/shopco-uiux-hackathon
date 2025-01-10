import Image from "next/image";
import Link from "next/link";
import React from "react";
import Container from "../ui/Container";

function Category() {
  return (
    <Container className="flex justify-center items-center">
      <div className="md:w-[1240px] md:h-[816px] bg-[#F0F0F0] rounded-[40px] mt-6 md:mt-16 pt-6 md:pt-0 pb-6 md:pb-0 flex flex-col justify-center items-center md:px-4">
        <h1 className="font-bold font-integralcf text-3xl md:text-5xl mb-6 md:mb-16 text-wrap md:text-nowrap text-center mx-6">
          BROWSE BY dress STYLE
        </h1>
        <div className="flex flex-col justify-center items-center space-y-5 w-full">
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mx-5">
            <Link href={"shop#casual"}>
              <Image
                src={"/category/casual.png"}
                alt="casual"
                width={407}
                height={289}
                className="object-scale-down w-96 md:w-[407px]"
              />
            </Link>
            <Link href={"shop#formal"}>
              <Image
                src={"/category/formal.png"}
                alt="formal"
                width={684}
                height={289}
                className="object-scale-down w-96 md:w-[684px] "
              />
            </Link>
          </div>
          <div className="flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-5 mx-5">
            <Link href={"shop#party"}>
              <Image
                src={"/category/party.png"}
                alt="party"
                width={684}
                height={289}
                className="object-scale-down w-96 md:w-[684px]"
              />
            </Link>
            <Link href={"shop#gym"}>
              <Image
                src={"/category/gym.png"}
                alt="gym"
                width={407}
                height={289}
                className="object-scale-down w-96 md:w-[407px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Category;
