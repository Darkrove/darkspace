import React from "react";
import Image from "next/image";
import Router from "next/router";

import { DarkspaceLogoFull } from "../assets/Icons";

const HomeNavbar = () => {
  return (
    <nav className="fixed z-10 w-full bg-zinc-900 md:absolute">
      <div className="container m-auto max-w-screen-xl px-2 md:px-12 lg:px-7">
        <div className="flex flex-wrap items-center justify-between py-3 gap-6 md:py-4 md:gap-0">
          <input
            type="checkbox"
            name="toggle_nav"
            id="toggle_nav"
            className="peer hidden"
          />
          <div className="w-full px-6 flex justify-between lg:w-max md:px-0 z-30">
            <a
              href="#"
              aria-label="logo"
              className="flex items-center"
            >
              <DarkspaceLogoFull className="h-[50px] lg:h-[70px]" />
              <span className="top-0 -right-5 inline-flex items-center py-0.5 px-1.5 rounded-full text-[10px] lg:text-xs font-medium transform -translate-y-1/2 bg-red-500 text-white">
                Beta
              </span>
            </a>

            <div className="flex items-center lg:hidden max-h-10">
              <label
                role="button"
                htmlFor="toggle_nav"
                aria-label="humburger"
                id="hamburger"
                className="relative w-10 h-auto p-2"
              >
                <div
                  id="line"
                  className="m-auto h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
                <div
                  id="line2"
                  className="m-auto mt-2 h-0.5 w-6 rounded bg-white transition duration-300"
                ></div>
              </label>
            </div>
          </div>

          <label
            role="button"
            htmlFor="toggle_nav"
            className="hidden peer-checked:block fixed w-full h-full left-0 top-0 z-10 bg-gray-700 bg-opacity-30 backdrop-blur backdrop-filter"
          ></label>
          <div className="hidden peer-checked:flex w-full flex-col lg:flex lg:flex-row justify-end z-30 items-center gap-y-6 p-6 rounded-xl bg-zinc-900 lg:gap-y-0 lg:p-0 md:flex-nowrap lg:bg-transparent lg:w-7/12">
            <div className="text-gray-600 lg:pr-4 w-full">
              <ul className="tracking-wide font-medium  text-sm flex flex-col gap-y-6 lg:gap-y-0 lg:flex-row w-full">
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition text-gray-300 hover:text-violet-500 "
                  >
                    <span>Home</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition text-gray-300 hover:text-violet-500"
                  >
                    <span>Documentation</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block md:px-4 transition text-gray-300 hover:text-violet-500"
                  >
                    <span>About</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full min-w-max space-y-2 border-violet-500 lg:space-y-0 sm:w-max">
              {/* <button
                onClick={() => Router.push("/signin")}
                type="button"
                class="ml-3 py-3 rounded-full px-4 inline-flex justify-center items-center gap-2 bg-purple-100 border border-transparent font-semibold text-purple-500 hover:text-white hover:bg-purple-500 focus:outline-none focus:ring-2 ring-offset-white focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
              >
                Signin
              </button> */}
              <button
                onClick={() => Router.push("/signin")}
                type="button"
                className="w-full py-3 px-6 text-center rounded-md transition bg-violet-500 hover:bg-violet-600 active:opacity-80 focus:opacity-80 sm:w-max"
              >
                <span className="block text-white font-semibold text-sm">
                  Sign in
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HomeNavbar;
