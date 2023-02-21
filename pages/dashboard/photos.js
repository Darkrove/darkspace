import React, { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";
import useSWR from "swr";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { DisplayFiles } from "../../components";

const Photos = () => {
  const { address, contract, getUserFiles } = useStateContext();

  const fetchFiles = async () => {
    const data = await getUserFiles();
    return data;
  };

  const { data, error, isLoading } = useSWR(["userFiles"], fetchFiles);

  return (
    <div>
      <DisplayFiles
        title="Photos"
        subtitle="All Photos"
        isLoading={isLoading}
        files={data
          ?.filter((file) => file.type.split("/")[0] === "image")
          .reverse()}
        address={address}
        user={true}
      />
    </div>
  );
};

export default Photos;

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
