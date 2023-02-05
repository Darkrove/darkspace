import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ConnectWallet } from "@thirdweb-dev/react";

import { UserDropdown } from "./";
import { capitalizeFirstLetter } from "../utils";
import { navlinks } from "../constants";
import { useStateContext } from "../context";
import Leaflet from "./shared/Leaflet";
import { DarkspaceLogo, SearchIcon, MenuIcon } from "../assets/Icons";
import useWindowSize from "../lib/hooks/useWindowSize";

const Navbar = () => {
  const { isMobile, isDesktop } = useWindowSize();
  const [openPopover, setOpenPopover] = useState(false);
  const { setActivePage } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className=" lg:flex-1 flex flex-row lg:max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-zinc-800 rounded-[100px] ">
        <input
          type="text"
          placeholder="Search for images"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-zinc-500 text-white bg-transparent outline-none"
        />
        <div className="w-[72px] h-full rounded-[20px] bg-violet-500 flex justify-center items-center cursor-pointer">
          <SearchIcon className="w-[20px] h-[20px] object-contain text-white" />
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        <ConnectWallet
          className="rounded-[100px]"
          accentColor="#8B5CF6"
          colorMode="dark"
        />
        <div className="w-[52px] h-[52px] overflow-hidden rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <UserDropdown onProfileClick={() => setActivePage("profile")} />
        </div>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <button onClick={() => setOpenPopover((prev) => !prev)}>
          <MenuIcon className="w-[34px] h-[34px] text-violet-500 object-contain cursor-pointer" />
        </button>
        <Link onClick={() => setActivePage("dashboard")} href="/dashboard">
          <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <DarkspaceLogo width={50} height={50} className="w-[60%]" />
          </div>
        </Link>
        <div className="w-[34px] h-[34px] overflow-hidden rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <UserDropdown onProfileClick={() => setActivePage("profile")} />
        </div>
      </div>
      {openPopover && isMobile && (
        <Leaflet setShow={setOpenPopover}>
          <div className="w-full rounded-md bg-zinc-800 border-0 p-2 sm:w-56">
            {navlinks.map((link) => (
              <Link
                key={link.name}
                href={link.link}
                onClick={()=>setActivePage(link.name)}
                className="flex flex-row items-center justify-start text-zinc-200 space-x-2 relative w-full rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-zinc-600"
              >
                {link.icon}
                <p className="text-sm ">{capitalizeFirstLetter(link.name)}</p>
              </Link>
            ))}
          </div>
        </Leaflet>
      )}
    </div>
  );
};

export default Navbar;
