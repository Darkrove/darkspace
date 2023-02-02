import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { ConnectWallet } from "@thirdweb-dev/react";
import { useSession, signOut } from "next-auth/react";

import { CustomButton, UserDropdown } from "./";
import { capitalizeFirstLetter } from "../utils";
import { navlinks } from "../constants";
import { useStateContext } from "../context";
import { logo, menu, search, userProfile, logout } from "../assets";

const Row = ({ id, styles, name, imgUrl, activePage, handleClick }) => {
  return (
    <li
      key={id}
      className={`flex p-4 ${activePage === name && "bg-[#3a3a43]"}`}
      onClick={handleClick}
    >
      <Image
        width={50}
        height={50}
        src={imgUrl}
        alt={name}
        className={`w-[24px] h-[24px] object-contain ${
          activePage === name ? "grayscale-0" : "grayscale"
        }`}
        c
      />
      <p
        className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
          activePage === name ? "text-violet-500" : "text-[#808191]"
        }`}
      >
        {capitalizeFirstLetter(name)}
      </p>
    </li>
  );
};

const Navbar = () => {
  const { data: session } = useSession();
  const [toggleDrawer, setToggleDrawer] = useState(false);
  const { connect, address, activePage, setActivePage, disconnect } =
    useStateContext();

  const router = useRouter();
  const push = () => {
    setActivePage("uploadMedia");
    router.push("/dashboard/uploadmedia");
    setToggleDrawer(false);
  };

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6">
      <div className=" lg:flex-1 flex flex-row lg:max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-zinc-800 rounded-[100px] ">
        <input
          type="text"
          placeholder="Search for images"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-zinc-500 text-white bg-transparent outline-none"
        />

        <div className="w-[72px] h-full rounded-[20px] bg-violet-500 flex justify-center items-center cursor-pointer">
          <Image
            width={50}
            height={50}
            src={search}
            loading="lazy"
            alt="search"
            className="w-[20px] h-[20px] object-contain"
          />
        </div>
      </div>

      <div className="sm:flex hidden flex-row justify-end gap-4">
        {/* <CustomButton
          btnType="button"
          title={address ? "Upload" : "Connect"}
          styles={address ? "bg-violet-500" : "bg-[#8c6dfd]"}
          handleClick={() => {
            if (address) push();
            else connect();
          }}
        /> */}
        <ConnectWallet
          className="rounded-[100px]"
          accentColor="#8B5CF6"
          colorMode="dark"
        />
        <div className="w-[52px] h-[52px] overflow-hidden rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          {/* <Image
              width={50}
              height={50}
              loading='lazy'
              src={session? session.user.image : userProfile}
              alt="user"
              className="w-[100%] h-[100%] object-fill"
            /> */}
          <UserDropdown onProfileClick={() => setActivePage("profile")} />
        </div>
      </div>

      {/* Small screen navigation */}
      <div className="sm:hidden flex justify-between items-center relative">
        <Image
          width={50}
          height={50}
          src={menu}
          alt="menu"
          loading="lazy"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => setToggleDrawer((prev) => !prev)}
        />
        <Link onClick={() => setActivePage("dashboard")} href="/dashboard">
          <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
            <Image
              width={50}
              height={50}
              loading="lazy"
              src={logo}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
        <div className="w-[34px] h-[34px] overflow-hidden rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          {/* <Image
              width={50}
              height={50}
              loading='lazy'
              src={session? session.user.image : userProfile}
              alt="user"
              className="w-[100%] h-[100%] object-fill"
            /> */}
          <UserDropdown onProfileClick={() => setActivePage("profile")} />
        </div>

        <div
          className={`absolute top-[60px] right-0 left-0 bg-zinc-800 z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[200vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <Row
                id={link.name}
                {...link}
                activePage={activePage}
                handleClick={() => {
                  setActivePage(link.name);
                  setToggleDrawer(false);
                  router.push(link.link);
                }}
              />
            ))}
            {/* {session ? (
              <Row
                name="logout"
                imgUrl={logout}
                handleClick={() => signOut()}
              />
            ) : (
              ""
            )} */}
          </ul>

          <div className="flex mx-4">
            {/* <CustomButton
              btnType="button"
              title={address ? "Upload" : "Connect"}
              styles={address ? "bg-violet-500" : "bg-[#8c6dfd]"}
              handleClick={() => {
                if (address) push();
                else connect();
              }}
            /> */}
            <ConnectWallet accentColor="#8B5CF6" colorMode="dark" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
