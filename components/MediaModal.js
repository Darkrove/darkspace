import React, { useState } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import Router from "next/router";
import { useSession } from "next-auth/react";

import {
  DownloadIcon,
  LinkIcon,
  DetailIcon,
  CopyIcon,
  OpenEyeIcon,
  CloseEyeIcon,
  TrashIcon,
} from "../assets/Icons";
import { Loader } from "../components";
import { useStateContext } from "../context";
import useCopyToClipboard from "../lib/hooks/useCopyToClipboard";

export default function MediaModal({
  id,
  setOpenModal,
  hash,
  src,
  name,
  type,
  username,
  user,
  status,
}) {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [copyToClipboard, { success }] = useCopyToClipboard();
  const [message, setMessage] = useState(
    "Hold on, we're getting things ready..."
  );

  const { updateFile } = useStateContext();

  const updateStatus = async (id, status) => {
    try {
      await updateFile(id, status);
    } catch (error) {
      console.log(error);
    }
  };

  const copyClipboard = (src) => {
    copyToClipboard(src);
    toast.success("Copied!");
  };

  const downloadUsingFetch = async (HREF, name) => {
    // console.log(href);
    await fetch(HREF, {
      method: "GET",
      headers: {},
    })
      .then((response) => {
        response.arrayBuffer().then(function (buffer) {
          const url = window.URL.createObjectURL(new Blob([buffer]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", name); //or any other extension
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          toast.success("Downloaded!");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const shareFile = (title, url) => {
    console.log(url);
    if ("share" in navigator) {
      navigator
        .share({
          title: title,
          text: `${session?.user?.name} shared something with you 🔥🚀\n`,
          url: url,
        })
        .then(() => {
          console.log("Callback after sharing");
        })
        .catch(console.error);
    } else {
      console.log("provide fallback share");
    }
  };

  const handleUpdate = async (cid, status) => {
    setMessage("Initiating...");
    setIsLoading(true);
    try {
      setMessage("Transaction in progress...");
      await updateFile(cid, status);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div
          className="fixed inset-0 w-full h-full bg-zinc-700 bg-opacity-80"
          onClick={() => setOpenModal(false)}
        ></div>
        <div className="flex items-center min-h-screen px-4 py-8" id={id}>
          <div className="relative w-full max-w-lg p-4 mx-auto bg-zinc-800 rounded-xl shadow-lg">
            <div className="sm:flex">
              <div className="text-center">
                <div className="flex flex-1 justify-between items-center">
                  <h4 className="text-sm text-left xl:text-lg font-medium text-[#808191]">
                    by @{username}
                  </h4>
                  <div class="hs-dropdown relative inline-flex z-20">
                    <button
                      id="hs-dropdown-custom-icon-trigger"
                      type="button"
                      class="hs-dropdown-toggle p-3 inline-flex justify-center items-center gap-2 rounded-md font-medium shadow-sm align-middle focus:outline-none transition-all text-sm hover:bg-zinc-700 text-gray-400"
                    >
                      <svg
                        class="w-4 h-4 text-[#808191]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                      </svg>
                    </button>

                    <div
                      class="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden mt-2 min-w-[15rem] shadow-md rounded-lg p-2 bg-zinc-800"
                      aria-labelledby="hs-dropdown-custom-icon-trigger"
                    >
                      <button
                        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                        onClick={() => downloadUsingFetch(src, name)}
                      >
                        <DownloadIcon className="w-5 h-5 flex-none" />
                        Download
                      </button>
                      <button
                        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                        onClick={() => copyClipboard(src)}
                      >
                        <CopyIcon className="w-5 h-5 flex-none" />
                        {success ? "Copied" : "Copy link"}
                      </button>
                      <button
                        onClick={() => shareFile(name, src)}
                        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                      >
                        <LinkIcon className="w-5 h-5 flex-none" />
                        Share a copy
                      </button>
                      <button
                        onClick={() => Router.push(`/dashboard/show/${hash}`)}
                        class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                      >
                        <DetailIcon className="w-5 h-5 flex-none" />
                        Details
                      </button>
                      {user ? (
                        <div class="py-2 first:pt-0 last:pb-0">
                          <span class="text-left block py-2 px-3 text-xs font-medium uppercase text-gray-500">
                            Admin
                          </span>
                          {status === "public" ? (
                            <button
                              onClick={() => handleUpdate(id, "private")}
                              class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                            >
                              <CloseEyeIcon className="w-5 h-5 flex-none" />
                              Keep private
                            </button>
                          ) : (
                            <button
                              onClick={() => handleUpdate(id, "public")}
                              class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                            >
                              <OpenEyeIcon className="w-5 h-5 flex-none" />
                              Share as public
                            </button>
                          )}

                          <button
                            onClick={() => handleUpdate(id, "delete")}
                            class="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-md text-sm focus:ring-2 focus:ring-blue-500 text-gray-400 hover:bg-gray-700 hover:text-gray-300"
                          >
                            <TrashIcon className="w-5 h-5 flex-none" />
                            Remove
                          </button>
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>

                {type === "video/mp4" ? (
                  <div className="mt-2 text-center space-y-6 text-[15px] leading-relaxed text-gray-500">
                    <video
                      // controls
                      // controlsList="nodownload"
                      preload="auto"
                      autoPlay
                      playsInline
                      loop
                      src={src}
                      className="mx-auto w-50 rounded-lg"
                    />
                  </div>
                ) : (
                  <div className="mt-2 text-center space-y-6 text-[15px] leading-relaxed text-gray-500">
                    <Image
                      src={src}
                      alt="illustration"
                      loading="lazy"
                      width={600}
                      height={500}
                      className="mx-auto w-50 rounded-lg"
                    />
                  </div>
                )}
                <div className="items-center gap-2 mt-3 sm:flex">
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white font-medium bg-violet-500 rounded-md outline-none ring-offset-2 ring-white-600 focus:ring-2"
                    download
                    onClick={() => downloadUsingFetch(src, name)}
                  >
                    Download
                  </button>
                  <button
                    className="w-full mt-2 p-2.5 flex-1 text-white rounded-md font-medium outline-none border ring-offset-2 ring-violet-500 focus:ring-2"
                    onClick={() => setOpenModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {isLoading && (
          <Loader message={message} />
        )}
      </div>
    </>
  );
}
