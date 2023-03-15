import React from "react";
import Balancer from "react-wrap-balancer";

const Loader = ({ message, subMessage, isTransacting }) => {
  return (
    <div className="fixed inset-0 z-30 h-screen bg-[rgba(0,0,0,0.7)] flex items-center justify-center flex-col">
      <div className="card block py-14 shadow-xl mx-6 space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div className="flex flex-col items-center justify-center">
          <div className="loader-pulse"></div>
          <Balancer className="mt-[20px] font-epilogue font-bold text-[20px] text-white text-center">
            {message}
          </Balancer>
          <Balancer className="text-white text-center text-lg">
            {subMessage}
          </Balancer>
          {isTransacting && (
            <a
              className="text-white font-semibold text-center text-md mt-4 bg-violet-800 py-2 px-4 rounded-xl"
              href="https://goerli.etherscan.io/address/0xF59c8EbE7a730C02800C59010a998948c203EBDc"
              target="_blank"
              rel="noreferrer"
            >
              VIEW ON ETHERSCAN
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Loader;
