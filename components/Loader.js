import React from "react";
import Balancer from "react-wrap-balancer";

const msg = [
  "Please hold on, this could take several seconds to complete.",
  "Your Space is getting created.",
  "This can take a few minutes depending on gas. Don’t leave this page.",
];

const Loader = ({ message, isTransacting }) => {
  return (
    <div className="fixed inset-0 z-30 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <div className="card block py-14 shadow-xl mx-6 space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div class="flex flex-col items-center justify-center">
          <div class="loader-pulse"></div>
          <p className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
            {message}
          </p>
          <Balancer className="text-white text-center text-lg">
            {msg[2]}
          </Balancer>
          {isTransacting && (
            <a
              className="text-zinc-200 text-bold text-center text-md mt-4 bg-zinc-800 py-2 px-4 rounded-xl"
              href="https://goerli.etherscan.io/address/0xF59c8EbE7a730C02800C59010a998948c203EBDc"
              target="_blank"
              rel="noreferrer"
            >
              VIEW STATUS ON ETHERSCAN
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
