import React from 'react'
import GithubBadge from '../components/GithubBadge';

const about = () => {
    return (
        <div className="relative overflow-hidden isolate h-screen flex justify-center items-center">
            <div className="flex flex-col justify-center items-center space-y-3 max-w-2xl text-center p-10 mt-[85px]">
                <h1 className="text-zinc-200 leading-none mb-3 text-[2.5rem] font-extrabold">
                    Open Source Project 🔮
                </h1>
                <p className="text-zinc-300 text-lg m-0 leading-tight">
                    The source code of this project is available on {" "}
                    <a
                        className="text-violet-500 underline transition hover:text-violet-700/75"
                        href="https://github.com/Darkrove/darkspace"
                        rel="noreferrer"
                        target="_blank">github</a> {" "}
                    for you to review, modify and you can also contribute to this project if you want to by
                    forking 📌 this repo and making pull requests.
                </p>
                <GithubBadge repo="Darkrove/darkspace" />
            </div>
        </div>
    )
}

export default about