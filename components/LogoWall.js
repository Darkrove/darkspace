import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Logo = ({ src, description }) => {
  return (
    <div class="group rounded-xl border border-zinc-800 shadow bg-white bg-opacity-5 py-2 px-4 hover:bg-opacity-10 hover:border-violet-500/10 hover:shadow-violet-500/10">
      <Image
        src={src}
        class="transition"
        loading="lazy"
        width={50}
        height={50}
        alt={description}
      />
    </div>
  );
};

const LogoWall = () => {
  return (
    <div class="relative flex flex-col items-center overflow-hidden pb-20 bg-transparent">
      <div class="container relative z-[1] m-auto px-6 md:px-12">
        <div class="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 class="text-4xl font-bold text-gray-800 dark:text-white sm:text-4xl">
          <Balancer> Powered by web3 technologies</Balancer>
           
          </h2>
        </div>
        <div class="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div class="flex flex-wrap justify-center gap-6">
            <Logo src="assets/ipfs.svg" alt="logo ipfs" />
            <Logo src="assets/thirdweb.svg" alt="logo thirdweb" />
            <Logo src="assets/metamask.svg" alt="logo metamask" />
            <Logo src="assets/ethereum.svg" alt="logo ethereum" />
            <Logo src="assets/filecoin.svg" alt="logo filecoin" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoWall;
