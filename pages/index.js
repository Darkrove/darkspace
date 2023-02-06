import React, { useEffect, useState } from "react";
import Balancer from "react-wrap-balancer";
import {
  GiAbstract020,
  GiAbstract024,
  GiAbstract041,
  GiAbstract047,
  GiAbstract077,
  GiAbstract103,
} from "react-icons/gi";
import Link from "next/link";

import { LogoWall, CtaSection, FeatureCard, GetStarted, Footer } from "../components";
import Feature from "../components/FeatureCard";

const Index = () => {
  return (
    <div className="bg-zinc-900 relative overflow-hidden isolate">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        className="absolute blur top-[450px] left-1/2 -z-10 h-[80rem] w-[80rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient
            id="759c1415-0410-454c-8f7c-9a820de03641"
            cx={0}
            cy={0}
            r={1}
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)"
          >
            <stop stopColor="#7775D6" />
            <stop offset={1} stopColor="#E935C1" stopOpacity={0} />
          </radialGradient>
        </defs>
      </svg>
      <CtaSection />
      <LogoWall />
      <section class="bg-transparent text-zinc-100">
        <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-lg text-center">
            <h2 class="text-4xl font-bold sm:text-4xl">
              <Balancer>Own your data for the first time</Balancer>
            </h2>

            <p class="mt-4 text-zinc-300">
              <Balancer>
                Upload your photos, files and videos to the decentralized web
                and access them from anywhere, anytime, forever.
              </Balancer>
            </p>
          </div>

          <div class="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<GiAbstract047 className="h-10 w-10 text-[#D566FF]" />}
              title={"Security"}
              description={
                "Your data is safe with DarkSpace. Our decentralized architecture and state-of-the-art encryption techniques ensure that your information is protected and secure."
              }
            />
            <FeatureCard
              icon={<GiAbstract041 className="h-10 w-10 text-[#DDA10C]" />}
              title={"Privacy"}
              description={
                "DarkSpace is designed to protect your privacy. With our decentralized architecture, you can be sure that your data is safe from the prying eyes of corporations and governments."
              }
            />
            <FeatureCard
              icon={<GiAbstract103 className="h-10 w-10 text-[#FF6080]" />}
              title={"Decentralization"}
              description={
                "DarkSpace is powered by blockchain technology, giving you complete control over your data. Our decentralized network ensures that your information is safe, secure, and accessible only by you."
              }
            />
            <FeatureCard
              icon={<GiAbstract077 className="h-10 w-10 text-[#269FFF]" />}
              title={"User experience"}
              description={
                "DarkSpace is designed for everyone. Our user-friendly interface and intuitive design make it easy for you to access, store, and manage your data."
              }
            />
            <FeatureCard
              icon={<GiAbstract024 className="h-10 w-10 text-[#E5344C]" />}
              title={"Integration"}
              description={
                "DarkSpace is designed to be used with the tools you already use. Integrate with your favorite mobile devices, and desktop applications for seamless access to your data."
              }
            />
            <FeatureCard
              icon={<GiAbstract020 className="h-10 w-10 text-[#9AC53C]" />}
              title={"Accessibility"}
              description={
                "DarkSpace is accessible from anywhere in the world. Store and manage your data no matter where you are, with access from any device."
              }
            />
          </div>
        </div>
      </section>
      <GetStarted/>
    </div>
  );
};

export default Index;
