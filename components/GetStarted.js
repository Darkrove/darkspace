import React from "react";
import Balancer from "react-wrap-balancer";
import Router from "next/router";

import { DarkspaceLogo } from "../assets/Icons";

const GetStarted = () => {
  return (
    <div>
      <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="card container border rounded-xl py-14 shadow-xl m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
          <div class="flex items-center justify-center pb-20">
            <div className="relative group flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-violet-600 w-28 h-28 lg:w-32 lg:h-32 rounded-3xl blur-xl opacity-75 group-hover:opacity-100"></div>
              <div className="relative lg:w-32 lg:h-32 w-28 h-28 rounded-3xl bg-zinc-800 flex justify-center items-center">
                <DarkspaceLogo
                  width={50}
                  height={50}
                  className="w-4/6 h-4/6 text-violet-600"
                />
              </div>
            </div>
          </div>
          <div class="m-auto space-y-6 md:w-8/12 lg:w-7/12">
            <h1 class="text-center text-4xl font-bold text-zinc-200">
              Get Started now
            </h1>
            <p class="text-center text-md text-zinc-400">
              <Balancer>
                The future of storage is here. Start owning your data and
                experience the power of blockchain technology.
              </Balancer>
            </p>
            <div class="flex flex-wrap items-center justify-center gap-6">
              <button
                 onClick={() => Router.push("/signin")}
                className={`text-xl w-full lg:w-1/2 h-16 rounded-md bg-gradient-to-r from-pink-500 to-violet-500 transition-all duration-200 px-3.5 py-1.5 font-semibold leading-10 text-white shadow-lg`}
              >
                Start Upload 🚀
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
