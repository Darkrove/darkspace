import React from "react";
import Image from "next/image";
import styles from "../styles/Logowall.module.css";

const LogoWall = () => {
  return (
    <div class="relative flex flex-col items-center overflow-hidden pb-20 bg-transparent">
      <div class="container relative z-[1] m-auto px-6 md:px-12">
        <div class="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 class="text-2xl font-bold text-gray-800 dark:text-white md:text-4xl">
            Powered by <span class="text-primary">web3</span> technologies
          </h2>
        </div>
        <div class="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div class="flex flex-wrap justify-center gap-6">
            <div class="group rounded-xl border border-gray-200 dark:border-violet-500 shadow bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src="assets/ipfs.svg"
                class="transition"
                loading="lazy"
                width={50}
                height={50}
                alt="logo ipfs"
              />
            </div>
            <div class="group rounded-xl border border-gray-200 dark:border-violet-500 shadow bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src="assets/thirdweb.svg"
                class="transition"
                loading="lazy"
                width={50}
                height={50}
                alt="logo thirdweb"
              />
            </div>
            <div class="group rounded-xl border border-gray-200 dark:border-violet-500 shadow bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src="assets/metamask.svg"
                class="transition"
                loading="lazy"
                width={50}
                height={50}
                alt="logo metamask"
              />
            </div>
            <div class="group rounded-xl border border-gray-200 dark:border-violet-500 shadow bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
              <Image
                src="assets/ethereum.svg"
                class="transition"
                loading="lazy"
                width={50}
                height={50}
                alt="logo ethereum"
              />
            </div>
            <div class="group rounded-xl border border-gray-200 dark:border-violet-500 shadow bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10">
            <Image
                src="assets/filecoin.svg"
                class="transition"
                loading="lazy"
                width={50}
                height={50}
                alt="logo filecoin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoWall;
