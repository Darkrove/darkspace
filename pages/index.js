import React, { useEffect, useState } from "react";
import Link from "next/link";

import { LogoWall, CtaSection } from "../components";

const Index = () => {
  return (
    <div className="bg-zinc-900 relative overflow-hidden isolate">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      className="absolute top-1/3 left-1/2 -z-10 h-[74rem] w-[74rem] -translate-y-1/2 sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
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
      <CtaSection/>
      <LogoWall/>
    </div>
  );
};

export default Index;
