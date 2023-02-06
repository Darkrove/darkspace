import React, { useState, useEffect } from "react";
import Link from "next/link";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { LeftFaceArrow } from "../../assets/Icons";
import { DisplayFiles } from "../../components";

const Recent = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const { address, contract, setActivePage, getUserFiles } = useStateContext();

  const fetchFiles = async () => {
    setIsLoading(true);
    console.log();
    const data = await getUserFiles();
    if (data) setFiles(data);
    setIsLoading(false);
  };
  useEffect(() => {
    if (contract) fetchFiles();
  }, [address, contract]);

  return (
    <div>
      <DisplayFiles
        title="Recent Images"
        subtitle="Recent images"
        isLoading={isLoading}
        files={files
          ?.filter((file) => file.type.split("/")[0] === "image")
          .reverse()
          .slice(0, 3)}
        address={address}
        user={true}
      >
        {address &&
        files?.filter((file) => file.type.split("/")[0] === "image").length >
          0 ? (
          <Link
            href="/dashboard/photos"
            onClick={() => setActivePage("photos")}
            rel="noreferrer"
            className="flex group gap-2 mt-[10px] items-center duration-200 text-zinc-500 cursor-pointer no-underline hover:text-zinc-400"
          >
            See Others{" "}
            <span className="group-hover:translate-x-1 duration-200">
              <LeftFaceArrow className="w-4 h-4 fill-current" />
            </span>
          </Link>
        ) : null}
      </DisplayFiles>
      <DisplayFiles
        title="Recent Videos"
        subtitle="Recent videos"
        isLoading={isLoading}
        files={files
          ?.filter((file) => file.type.split("/")[0] === "video")
          .reverse()
          .slice(0, 3)}
        address={address}
        user={true}
        style="mt-[20px]"
      >
        {address &&
        files?.filter((file) => file.type.split("/")[0] === "video").length >
          0 ? (
          <Link
            href="/dashboard/videos"
            onClick={() => setActivePage("videoss")}
            rel="noreferrer"
            className="flex group gap-2 mt-[10px] items-center duration-200 text-zinc-500 cursor-pointer no-underline hover:text-zinc-400"
          >
            See Others{" "}
            <span className="group-hover:translate-x-1 duration-200">
              <LeftFaceArrow className="w-4 h-4 fill-current" />
            </span>
          </Link>
        ) : null}
      </DisplayFiles>
    </div>
  );
};

export default Recent;

export async function getServerSideProps(context) {
  const session = await getServerSession(context.req, context.res, authOptions);
  if (!session) {
    return {
      redirect: {
        destination: "/signin",
        permanent: false,
      },
    };
  }
  return {
    props: { session },
  };
}
