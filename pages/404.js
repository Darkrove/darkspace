import React from "react";
import Link from "next/link";

const ErrorPage = () => {
  return (
    <section className="flex items-center h-screen p-16 bg-zinc-900 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-zinc-200">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn&apos;t find this page.
          </p>
          <p className="mt-4 mb-8 text-zinc-400">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            href="/"
            className="px-8 py-3 font-semibold rounded bg-violet-500 text-zinc-900 hover:bg-violet-700 hover:text-zinc-400"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ErrorPage;
