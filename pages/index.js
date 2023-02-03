import React, { useEffect, useState } from "react";
import Link from "next/link";

import { Header, CtaSection } from "../components";

const Index = () => {
  const [theme, setTheme] = useState();
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setTheme(localStorage.theme);
  }, []);

  const setLightTheme = () => {
    localStorage.theme = "light";
    setTheme("light");
  };

  const setDarkTheme = () => {
    localStorage.theme = "dark";
    setTheme("dark");
  };

  const handleClick = () => {
    if (theme === "light") {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  const onOS = () => {
    // Whenever the user explicitly chooses to respect the OS preference
    localStorage.removeItem("theme");
  };

  return (
    <div className="bg-zinc-900 min-h-screen">
      <CtaSection/>
    </div>
    //   <div className="h-screen w-full flex justify-center items-center">
    //     <div className="flex flex-col dark:bg-white bg-gray-800 text-gray-800 rounded-lg p-4 text-center">
    //       <h1 className="text-2xl font-bold dark:text-gray-800 text-white">
    //         Toggle Dark Mode
    //       </h1>
    //       <p className="dark:text-gray-800 text-white">This is a demo .</p>
    //       <Link
    //         className="dark:text-white text-gray-800  px-4 py-2 rounded-3xl bg-gray-100 dark:bg-gray-800"
    //         href="/dashboard"
    //       >
    //         Dashboard
    //       </Link>
    //     </div>
    //     <button
    //       className="absolute bottom-5 left-5 w-10 h-10 rounded-full dark:text-gray-800 dark:bg-white bg-gray-800 flex justify-center items-center text-white"
    //       id="theme-toggle"
    //       onClick={onOS}
    //     >
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         viewBox="0 0 24 24"
    //         fill="currentColor"
    //         className="w-6 h-6"
    //       >
    //         <path
    //           fillRule="evenodd"
    //           d="M2.25 5.25a3 3 0 013-3h13.5a3 3 0 013 3V15a3 3 0 01-3 3h-3v.257c0 .597.237 1.17.659 1.591l.621.622a.75.75 0 01-.53 1.28h-9a.75.75 0 01-.53-1.28l.621-.622a2.25 2.25 0 00.659-1.59V18h-3a3 3 0 01-3-3V5.25zm1.5 0v7.5a1.5 1.5 0 001.5 1.5h13.5a1.5 1.5 0 001.5-1.5v-7.5a1.5 1.5 0 00-1.5-1.5H5.25a1.5 1.5 0 00-1.5 1.5z"
    //           clipRule="evenodd"
    //         />
    //       </svg>
    //     </button>
    //     <button
    //       className="absolute bottom-5 right-5 w-10 h-10 rounded-full dark:text-gray-800 dark:bg-white bg-gray-800 flex justify-center items-center text-white"
    //       id="theme-toggle"
    //       onClick={() => handleClick()}
    //     >
    //       {theme === "light" ? (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path
    //             fillRule="evenodd"
    //             d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z"
    //             clipRule="evenodd"
    //           />
    //         </svg>
    //       ) : (
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           viewBox="0 0 24 24"
    //           fill="currentColor"
    //           className="w-6 h-6"
    //         >
    //           <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
    //         </svg>
    //       )}
    //     </button>
    //   </div>
    // </div>
  );
};

export default Index;
