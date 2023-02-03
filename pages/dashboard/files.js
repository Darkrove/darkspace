import React, { useState, useEffect } from "react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { DisplayFiles } from "../../components";

const Files = () => {
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
        title="Files"
        subtitle="All files"
        isLoading={isLoading}
        files={files?.filter((file) => file.type !== "directory").reverse()}
        address={address}
        user={true}
      />
    </div>
  );
};

export default Files;

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
