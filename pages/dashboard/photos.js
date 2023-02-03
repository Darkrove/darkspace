import React, { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { DisplayFiles } from "../../components";

const Photos = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState([]);
  const { address, contract, getUserFiles } = useStateContext();
  
  const fetchFiles = async () => {
    setIsLoading(true);
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
        title="Photos"
        subtitle="All Photos"
        isLoading={isLoading}
        files={files
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
