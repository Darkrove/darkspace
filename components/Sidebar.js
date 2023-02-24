import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

import { navlinks } from "../constants";
import { sun } from "../assets";
import { useStateContext } from "../context";
import { ToolTip } from "./";
import { DarkspaceLogo } from "../assets/Icons";

const Icon = ({ styles, name, imgUrl, activePage, disabled, handleClick }) => (
  <div
    className={`w-[48px] h-[48px] rounded-[10px] ${
      activePage &&
      activePage === name &&
      "bg-gradient-to-r from-neutral-700 to-zinc-700"
    } flex justify-center items-center ${
      !disabled && "cursor-pointer"
    } ${styles}`}
    onClick={handleClick}
  >
    {!activePage ? (
      <Image
        width={50}
        height={50}
        src={imgUrl}
        alt="logo"
        loading="lazy"
        className="w-1/2 h-1/2"
      />
    ) : (
      <Image
        width={50}
        height={50}
        src={imgUrl}
        alt="logo"
        loading="lazy"
        className={`w-1/2 h-1/2 hover:grayscale-0 ${
          activePage !== name && "grayscale"
        }`}
      />
    )}
  </div>
);

const Sidebar = () => {
  const { activePage, setActivePage } = useStateContext();
  const router = useRouter();

  return (
    <div className="flex justify-between items-center flex-col fixed top-5 z-10 h-[93vh]">
      <Link
        onClick={() => setActivePage("dashboard")}
        href="/dashboard"
        className="w-[48px] h-[48px] rounded-[10px] bg-white/5 flex justify-center items-center"
      >
        <DarkspaceLogo width={50} height={50} className="w-1/2" />
      </Link>

      <div className="flex-1 flex flex-col justify-between items-center bg-white/5 rounded-[20px] w-[76px] py-4 mt-12">
        <div className="flex flex-col justify-center items-center gap-3">
          {navlinks.map((link) => (
            <ToolTip key={link.name} tip={link.tip}>
              <Icon
                key={link.name}
                {...link}
                activePage={activePage}
                handleClick={() => {
                  if (!link.disabled) {
                    setActivePage(link.name);
                    router.push(link.link);
                  }
                }}
              />
            </ToolTip>
          ))}
        </div>
        {/* <Icon styles="bg-zinc-800 shadow-secondary" imgUrl={sun} /> */}
      </div>
    </div>
  );
};

export default Sidebar;
