"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import Navbar from "./Navbar";

function Header() {
  const route = useRouter();

  const navImage = (e) => {
    e.preventDefault();
    route.push("/");
  };

  return (
    <>
      <div className="fixed top-0 min-w-full flex bg-red-600 h-[74px] pt-5 z-[1000px]">
        <div className="w-full sm:max-[568px] md:max-[768px] lg:max-w-[1024px] xl:max-w-[12080px] 2xl:max-w-[1440px] mx-auto px-5 2xl:px-28 flex text-white justify-between items-center pb-2">
          <div className="relative w-24 h-24 cursor-pointer" onClick={navImage}>
            <Image
              src="/logo.png"
              alt="NBT"
              width={100}
              height={80}
              className="absolute top-[10%] z-[1100] left-0 w-[70px] object-contain cursor-pointer"
            />
          </div>
          <Navbar />
          <div className="bg-slate-50 w-fit px-10 h-[48px] relative rounded-lg overflow-hidden grid place-content-center cursor-pointer xl:block hidden h-full">
            <div className="flex items-center justify-center gap-2">
                <h2 className="text-slate-600 text-nowrap text-[22px] font-medium">Register to Attend</h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
