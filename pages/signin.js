import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";
import { DiscordLogo, GithubLogo, GoogleLogo } from "../assets/Icons";
import { LoadingDots } from "../components/icons";

export const Button = ({ children, title, handle, signinclicked }) => {
  return (
    <button
      disabled={signinclicked}
      onClick={handle}
      className={`${
        signinclicked && "cursor-not-allowed"
      }group relative flex h-11 items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white dark:before:bg-gray-600 dark:before:border-gray-600 before:border before:border-gray-200 before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 disabled:before:bg-gray-300 disabled:before:scale-100`}
    >
      {signinclicked ? (
        <div className="flex justify-center items-center w-full">
          <LoadingDots color="#808080" />
        </div>
      ) : (
        <>
          <span className="w-full relative flex justify-center items-center gap-3 text-base font-medium text-gray-600 dark:text-gray-100">
            {children}
            <span className="lg:text-base text-xs font-medium">{title}</span>
          </span>
        </>
      )}
    </button>
  );
};

const login = () => {
  const { data: session } = useSession();
  const [signInGoogleClicked, setSignInGooleClicked] = useState(false);
  const [signInGithubClicked, setSignInGithubClicked] = useState(false);
  const [signInDiscordClicked, setSignInDiscordClicked] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);
  const environment = process.env.NODE_ENV;
  const URL =
    environment === "development"
      ? process.env.NEXT_PUBLIC_DEVELOPMENT_URL
      : process.env.NEXT_PUBLIC_PRODUCTION_URL;

  async function signInWithGithub() {
    setSignInGithubClicked(true);
    signIn("github", { callbackUrl: URL });
  }
  async function signInWithGoogle() {
    setSignInGooleClicked(true);
    signIn("google", { callbackUrl: URL });
  }
  async function signInWithDiscord() {
    setSignInDiscordClicked(true);
    signIn("discord", { callbackUrl: URL });
  }

  return (
    <div className="dark:bg-[#13131a] min-h-screen grid content-center m-auto">
      <div className="relative py-16">
        <div className="container relative m-auto px-6 text-gray-500 md:px-12 xl:px-40">
          <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="rounded-3xl border border-gray-100 dark:border-[#1c1c24] bg-white dark:bg-[#1c1c24] shadow-2xl shadow-gray-600/10 dark:shadow-none">
              <div className="p-8 py-12 sm:p-16">
                <div className="space-y-4">
                  <Link href="/">
                    <Image
                      src="/assets/logo.svg"
                      loading="lazy"
                      className="w-10"
                      width={10}
                      height={10}
                      alt="logo"
                    />
                  </Link>
                  <h2 className="mb-8 lg:text-6xl md:text-5xl sm:text-4xl text-3xl font-bold text-gray-800 dark:text-white">
                    Sign in to <br />
                    Dark<span className="text-violet-500">Space</span>
                  </h2>
                  <p className="lg:text-2xl md:text-1xl text-xl font-semibold">
                    Login or register to start accessing storage.
                  </p>
                </div>
                <div className="mt-20 grid space-y-4">
                  <Button
                    title="Continue with Google"
                    handle={signInWithGoogle}
                    signinclicked={signInGoogleClicked}
                  >
                    <GoogleLogo
                      width={"1.5rem"}
                      height={"1.5rem"}
                      fill="#8b5cf6"
                    />
                  </Button>
                  <Button
                    img="github"
                    title="Continue with Github"
                    handle={signInWithGithub}
                    signinclicked={signInGithubClicked}
                  >
                    <GithubLogo
                      width={"1.5rem"}
                      height={"1.5rem"}
                      fill="#8b5cf6"
                    />
                  </Button>
                  <Button
                    img="apple"
                    title="Continue with Discord"
                    handle={signInWithDiscord}
                    signinclicked={signInDiscordClicked}
                  >
                    <DiscordLogo
                      width={"1.4rem"}
                      height={"1.4rem"}
                      fill="#8b5cf6"
                    />
                  </Button>
                </div>
                <div className="mt-20 space-y-4 text-center text-gray-600 dark:text-gray-400 sm:-mb-8">
                  <p className="text-xs">
                    By continuing, you agree to DarkSpace <br />
                    <a href="#" className="underline">
                      Terms of Service
                    </a>
                    ,
                    <a href="#" className="underline">
                      Privacy Policy
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  if(session){
    return {
      redirect : {
        destination: '/dashboard',
        permanent: false
      }
    }
  }
  return {
    props: {session}
  };
}
