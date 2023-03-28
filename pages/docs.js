import React from 'react'

const docs = () => {
  return (
    <div className="relative overflow-hidden isolate h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-2 max-w-2xl text-center p-10 mt-[85px]">
        <h1 className="text-zinc-200 leading-none mb-3 text-[2.5rem] font-extrabold">
          Comming Soon ⏱
        </h1>
        <p className="text-zinc-300 text-lg m-0 leading-tight">
          Stay Tuned 🔔 for more updates, and star ⭐ this repo on {" "}
          <a
            className="text-violet-500 underline transition hover:text-violet-700/75"
            href="https://github.com/Darkrove/darkspace"
            rel="noreferrer"
            target="_blank">github</a> {" "}.
        </p>
      </div>
    </div>
  )
}

export default docs