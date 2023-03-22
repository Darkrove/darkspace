import React, { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

import { UserIcon, LogoutIcon } from "../../assets/Icons";
import Profile from "../ui/avatar";
import Popover from "../shared/Popover";
import { FADE_IN_ANIMATION_SETTINGS } from "../../lib/constants";

export default function UserDropdown({ onProfileClick }) {
  const { data: session } = useSession();
  const { name, email, image } = session?.user || {};
  const [openPopover, setOpenPopover] = useState(false);

  if (!email) return null;

  return (
    <motion.div
      className="relative overflow-hidden inline-block text-left z-20"
      {...FADE_IN_ANIMATION_SETTINGS}
    >
      <Popover
        content={
          <div className="w-full rounded-md bg-zinc-800 border-0 p-2 sm:w-56">
            <Link
              className="flex flex-row items-center justify-start text-zinc-200 space-x-2 relative w-full rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-white/10"
              href="/dashboard/profile"
              onClick={onProfileClick}
            >
              <UserIcon className="h-4 w-4" />
              <p className="text-sm ">Profile</p>
            </Link>
            {/* <button
              className="relative flex w-full cursor-not-allowed items-center justify-start space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-gray-100"
              disabled
            >
              <LayoutDashboard className="h-4 w-4" />
              <p className="text-sm">Dashboard</p>
            </button> */}
            <button
              className="relative flex flex-row w-full items-center justify-start text-zinc-200 space-x-2 rounded-md p-2 text-left text-sm transition-all duration-75 hover:bg-white/10"
              onClick={() => signOut({ redirect: true })}
            >
              <LogoutIcon className="h-4 w-4" />
              <p className="text-sm ">Logout</p>
            </button>
          </div>
        }
        align="end"
        openPopover={openPopover}
        setOpenPopover={setOpenPopover}
      >
        <button
          onClick={() => setOpenPopover(!openPopover)}
          className="flex flex-row w-[100%] h-[100%] items-center justify-center overflow-hidden rounded-full transition-all duration-75 focus:outline-none active:scale-95"
        >
          <Profile image={image} name={name} className="w-[100%] h-[100%]" />
        </button>
      </Popover>
    </motion.div>
  );
}
