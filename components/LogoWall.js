import React from "react";
import Image from "next/image";
import Balancer from "react-wrap-balancer";

const Logo = ({ src, description }) => {
  return (
    <div className="group rounded-xl border card shadow py-2 px-4">
      <Image
        src={src}
        className="transition"
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
    <div className="relative flex flex-col items-center overflow-hidden pb-20 bg-transparent">
      <div className="container relative z-[1] m-auto px-6 md:px-12">
        <div className="m-auto text-center md:w-8/12 lg:w-6/12">
          <h2 className="text-4xl font-bold text-zinc-200 sm:text-4xl">
            <Balancer> Powered by web3 technologies</Balancer>
          </h2>
        </div>
        <div className="m-auto mt-16 md:w-11/12 lg:w-8/12 xl:w-7/12">
          <div className="flex flex-wrap justify-center gap-6">
            <Logo src="assets/ipfs.svg" alt="logo ipfs" />
            <Logo src="assets/thirdweb.svg" alt="logo thirdweb" />
            <Logo src="assets/metamask.svg" alt="logo metamask" />
            <Logo src="assets/ethereum.svg" alt="logo ethereum" />
            <Logo src="assets/filecoin.svg" alt="logo filecoin" />
            <Logo src="assets/turbo.svg" alt="logo turbo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoWall;
