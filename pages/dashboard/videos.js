import React, { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";
import useSWR from "swr";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { DisplayFiles } from "../../components";

const Videos = () => {
  const { address, contract, getUserFiles } = useStateContext();

  const fetchFiles = async () => {
    const data = await getUserFiles();
    return data;
  };

  const { data, error, isLoading } = useSWR(["userFiles"], fetchFiles);

  return (
    <div>
      <DisplayFiles
        title="Videos"
        subtitle="All videos"
        isLoading={isLoading}
        files={data
          ?.filter((file) => file.type.split("/")[0] === "video")
          .reverse()}
        address={address}
        user={true}
      />
    </div>
  );
};

export default Videos;
