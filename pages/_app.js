import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import Head from "next/head";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { useRouter } from "next/router";
import { SessionProvider } from "next-auth/react";
import { Provider as RWBProvider } from "react-wrap-balancer";
import NextNProgress from "nextjs-progressbar";

import "../styles/globals.css";
import { Sidebar, Navbar, HomeNavbar, Footer } from "../components";
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
          <Footer />
        </>
      );
    } else if (
      router.pathname === "/signin" ||
      router.pathname === "/signup" ||
      router.pathname === "/404"
    ) {
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
                : `dashboard | ${currentRoute.split("/")[2]}`}
            </title>
          </Head>
          <div className="relative sm:-8 p-4 min-h-screen flex flex-row overflow-hidden">
            <div className="sm:flex hidden mr-24 relative">
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

  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <StateContextProvider>
        <SessionProvider session={session}>
          <RWBProvider>
            <NextNProgress
              color={"#8B5CF6"}
              options={{ showSpinner: false, easing: "ease" }}
            />
            <Head>
              {/* <!-- Open Graph / Facebook --> */}
              <title>
                DarkSpace - The Next Generation of Secure and Decentralized Data
                Storage
              </title>
              <meta
                name="title"
                content="DarkSpace - The Next Generation of Secure and Decentralized Data Storage"
              />
              <meta
                name="description"
                content="Securely Store and Share Your Videos and Images on the Blockchain with DarkSpace."
              />

              {/* <!-- Open Graph / Facebook --> */}
              <meta property="og:type" content="website" />
              <meta property="og:url" content="https://darkspace.vercel.app/" />
              <meta
                property="og:title"
                content="DarkSpace - The Next Generation of Secure and Decentralized Data Storage"
              />
              <meta
                property="og:description"
                content="Securely Store and Share Your Videos and Images on the Blockchain with DarkSpace."
              />
              <meta
                property="og:image"
                content="https://user-images.githubusercontent.com/53792139/220374322-2d64a5c1-f789-4cf3-88f9-1abb30e915b2.jpg"
              />

              {/* <!-- Twitter --> */}
              <meta property="twitter:card" content="summary_large_image" />
              <meta
                property="twitter:url"
                content="https://darkspace.vercel.app/"
              />
              <meta
                property="twitter:title"
                content="DarkSpace - The Next Generation of Secure and Decentralized Data Storage"
              />
              <meta
                property="twitter:description"
                content="Securely Store and Share Your Videos and Images on the Blockchain with DarkSpace."
              />
              <meta
                property="twitter:image"
                content="https://user-images.githubusercontent.com/53792139/220374322-2d64a5c1-f789-4cf3-88f9-1abb30e915b2.jpg"
              />
              {/* Umami analytics */}
              <script
                async
                defer
                data-website-id="96a61cba-83cb-4307-9abe-ca5f3ee64129"
                src="https://umami-darkspace.vercel.app/umami.js"
              ></script>
            </Head>
            {map()}
            <Toaster
              position="bottom-center"
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
