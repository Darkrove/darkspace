import React from "react";
import { getServerSession } from "next-auth/next";
import useSWR from "swr";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { DisplayFiles } from "../../components";

const Home = () => {
  const { address } = useStateContext();

  const fetcher = (url) => fetch(url).then((res) => res.json());

  const { data, error, isLoading } = useSWR(
    "/api/fetch/publicfiles",
    fetcher
  );

  return (
    <div className="scroll-smooth">
      <DisplayFiles
        title="Feed"
        subtitle="Shared files"
        isLoading={isLoading}
        files={data}
        address={address}
        user={false}
      />
    </div>
  );
};

export default Home;