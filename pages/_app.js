import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";

import "../styles/globals.css";
import { Sidebar, Navbar, HomeNavbar } from "../components";
import { StateContextProvider } from "../context";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

const toastStyle = {
  style: {
    border: "0.5px solid #A855F7",
    background: "#1c1c24",
    borderRadius: "15px",
    padding: "10px",
    color: "#fff",
  },
  iconTheme: {
    primary: "#A855F7",
    secondary: "#fff",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  const currentRoute = useRouter().pathname;
  useEffect(() => {
    import("preline");
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  });
  const router = useRouter();

  const map = () => {
    if (
      router.pathname === "/" ||
      router.pathname === "/about" ||
      router.pathname === "/docs"
    ) {
      return (
        <>
          <HomeNavbar />
          <Component {...pageProps} />
        </>
      );
    } else if (router.pathname === "/signin" || router.pathname === "/signup") {
      return (
        <>
          <Component {...pageProps} />
        </>
      );
    } else {
      return (
        <div>
          <Head>
            <title>
              {currentRoute === "/dashboard"
                ? "dashboard"
                : `dashboard // ${currentRoute.split("/")[2]}`}
            </title>
          </Head>
          <div className="relative sm:-8 p-4 bg-zinc-900 min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
              <Sidebar />
            </div>
            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
              <Navbar />
              <Component {...pageProps} />
            </div>
          </div>
        </div>
      );
    }
  };

  // TODO add Layout
  // TODO svg icons component
  // TODO SWR
  return ( 
    <ThirdwebProvider desiredChainId={activeChainId}>
      <StateContextProvider>
        <SessionProvider session={session}>
          <RWBProvider>
            <Head>
              <title>DarkSpace</title>
              <meta name="description" content={"web3 storage provider"} />
              <meta name="theme-color" content="#27272a" />
              <meta property="og:site_name" content="darkspace" />
              <script
                async
                defer
                data-website-id="411c18c7-5acf-48b5-9276-6862e28bb56b"
                src="https://umami-production-c771.up.railway.app/umami.js"
              ></script>
            </Head>
            {map()}
            <Toaster
              position="bottom-right"
              reverseOrder={true}
              toastOptions={{ ...toastStyle, duration: 7000 }}
            />
            <Analytics />
          </RWBProvider>
        </SessionProvider>
      </StateContextProvider>
    </ThirdwebProvider>
  );
}

export default MyApp;
