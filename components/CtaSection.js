import Balancer from "react-wrap-balancer";
import Router from "next/router";
import Image from "next/image";

import { useStateContext } from "../context";
import styles from "../styles/Button.module.css";

export default function CtaSection() {
  const { activePage, setActivePage } = useStateContext();
  return (
    <div className="relative overflow-hidden isolate">
      <div className="mx-auto max-w-screen-xl py-24 sm:px-6 sm:py-32 lg:px-8">
        <div className="relative isolate overflow-hidden bg-transparent px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-16 lg:pt-0">
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
              <Balancer>
                Securely Store and Share Your Videos and Images on the
                Blockchain with DarkSpace
              </Balancer>
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              <Balancer>
                Dive and Experience the power of decentralization and never
                worry about your stuff being lost or snooped.
              </Balancer>
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <button
                onClick={() => {
                  setActivePage("dashboard");
                  Router.push("/dashboard");
                }}
                className={`${styles.button} border border-violet-500 hover:border-transparent w-full duration-200 transition-all rounded-md bg-violet-500 px-3.5 py-1.5 text-base font-semibold leading-7 md:leading-9 text-zinc-100 shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
              >
                Join Now 🚀
              </button>
              <button
                className={`${styles.button} hover:border-transparent w-full rounded-md px-3.5 py-1.5 text-base font-semibold leading-7 md:leading-9 text-zinc-100 border border-violet-500`}
              >
                Learn more <span aria-hidden="true">→</span>
              </button>
            </div>
            <p className="mt-2 italic font-bold text-[13px] text-zinc-200">
              Completely free to use. No hidden fees.
            </p>
          </div>
          <div className="relative mt-16 h-80 lg:mt-8 mx-auto lg:mx-0">
            <Image
              alt="hero image"
              src="/assets/hero-02.png"
              width={600}
              height={600}
              className="absolute top-0 left-0 w-[33rem] md:w-[45rem] max-w-none rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
