import { ChevronDown } from "lucide-react";
import React from "react";

function Navbar() {
  return (
    <>
      <ul className="flex items-center gap-4 text-sm">
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex items-center gap-2">
            <li className="text-[22px]">Home</li>
          </div>
        </div>
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex item gap-2">
            <li className="text-[22px]">Festival 2025</li>
            <ChevronDown className="text-sm" />
          </div>
          <div
            className="pt-3 hidden group-hover:block absolute top-[100%] bg-transparent min-w-fit z-10 dropDown"
          >
            <div className="fle flex-col gap-0 bg-white rounded-md px-2 py-4 shadow-md w-[200px]">
                <div className="cursor-pointer relative group px-2 py-3">
                    <div className="flex items-center gap-2">
                        <li className="text-black min-w-full text-[18px] text-nowrap flex items-center justify-between">
                            <p>Book Your Package Now</p>
                        </li>
                    </div>
                </div>
                <div className="cursor-pointer relative group px-2 py-3">
                    <div className="flex items-center gap-2">
                        <li className="text-black min-w-full text-[18px] text-nowrap flex items-center justify-between">
                            <p>Book Your Festive Hotel</p>
                        </li>
                    </div>
                </div>
            </div>
          </div>
        </div>
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex items-center gap-2">
            <li className="text-[22px]">Speakers</li>
          </div>
        </div>
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex items-center gap-2">
            <li className="text-[22px]">MFL International</li>
          </div>
        </div>
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex items-center gap-2">
            <li className="text-[22px]">Media</li>
          </div>
        </div>
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex items-center gap-2">
            <li className="text-[22px]">About</li>
          </div>          
        </div>
        <div className="cursor-pointer group relative hidden xl:block">
          <div className="flex items-center gap-2">
            <li className="text-[22px]">Partners</li>
          </div>
        </div>
      </ul>
    </>
  );
}

export default Navbar;
