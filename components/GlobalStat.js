import React from 'react'
import Balancer from "react-wrap-balancer";
import useSWR from "swr";
import { formatBytes } from '../utils';

const GlobalStat = () => {
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error, isLoading } = useSWR(
        "/api/fetch/stats",
        fetcher
    );
    return (
        <div> <div className="py-8">
            <div className="mx-auto max-w-screen-xl container px-4 lg:px-8">
                <div className="flex flex-col justify-center items-center mb-8 text-center">
                    <h1 className="text-4xl font-bold text-white mb-4">
                        Highlight
                    </  h1>
                    <Balancer className="text-zinc-300 text-lg">
                        Important highlights about darkspace activity 🚀
                    </Balancer>
                </div>
                <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center items-center">
                    <div className="card bg-zinc-200 bg-opacity-50 rounded-lg overflow-hidden shadow-lg backdrop-filter backdrop-blur-lg p-4 sm:mr-4 mb-4 sm:mb-0 w-full sm:w-1/2">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">
                                Total Files
                            </h2>
                            <p className="text-zinc-400 text-2xl">{data ? data.filecount : 0}</p>
                        </div>
                    </div>
                    <div className="card g-zinc-200 bg-opacity-50 rounded-lg overflow-hidden shadow-lg backdrop-filter backdrop-blur-lg p-4 sm:ml-4 w-full sm:w-1/2">
                        <div className="flex flex-col justify-center items-center">
                            <h2 className="text-3xl font-bold text-zinc-300 mb-4">
                                Total Uploads
                            </h2>
                            <p className="text-zinc-400 text-2xl">{data ? formatBytes(data.size) : "00 MB"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default GlobalStat