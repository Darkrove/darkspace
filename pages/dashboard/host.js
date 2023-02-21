import React, { useState, useEffect } from "react";
import { NFTStorage, File } from "nft.storage";
import { useStorageUpload } from "@thirdweb-dev/react";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";
import { getServerSession } from "next-auth/next";
import useSWR from "swr";

import { authOptions } from "../api/auth/[...nextauth]";
import {
  FolderUpload,
  CustomButton,
  DisplayTable,
  Snackbar,
  Loader,
} from "../../components";
import { useStateContext } from "../../context";

const Host = () => {
  const { data: session } = useSession();
  const { mutateAsync: upload } = useStorageUpload();

  const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [dataLoading, setDataLoading] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [message, setMessage] = useState(
    "Hold on, we're getting things ready..."
  );
  const [isTransacting, setIsTransacting] = useState(false);
  const { address, contract, getUserFiles, uploadFile, updateFile } = useStateContext();

  const handleChange = (e) => {
    setSelectedFiles(e.target.files);
    setIsActive(true);
  };

  const handleSubmit = async () => {
    setMessage("Uploading to ipfs...");
    setLoading(true);
    const NFT_STORAGE_TOKEN = process.env.NEXT_PUBLIC_STORAGE_API;
    const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });
    const myFiles = [];

    Array.from(selectedFiles).forEach((file) => {
      // const blob = new Blob([file]);
      const res = new File([file], file.name, { type: file.type });
      myFiles.push(res);
    });
    const folderName = selectedFiles[0].webkitRelativePath.split("/");
    const size = myFiles.reduce((total, f) => total + f.size, 0);
    console.log(myFiles);
    try {
      const cid = await client.storeDirectory(myFiles);
      if (cid.message) {
        setLoading(false);
        toast.error("😵‍💫 Upload failed, \n please try again.");
      }
      setMessage("Transaction in progress...");
      setIsTransacting(true);
      await uploadFile(
        folderName[0].toLowerCase(),
        "directory",
        size,
        cid,
        session?.user.name,
        session?.user.image
      );
      console.log(cid);
    } catch (error) {
      console.log(error);
    }
    setSelectedFiles([]);
    setIsTransacting(false);
    setIsActive(false);
    setMessage("")
    setLoading(false);
  };

  const fetchFiles = async () => {
    const data = await getUserFiles();
    return data
  };

  const handleDelete = async (cid) => { 
    setMessage("Deleting file...");
    setLoading(true);
    try {
      setMessage("Transaction in progress...");
      await updateFile(cid, "delete");
      setLoading(false);
      setMessage("")
    } catch (error) {
      console.log(error);
    }
  };

  const { data, error, isLoading } = useSWR(["userFiles"], fetchFiles);

  useEffect(() => {
    if (selectedFiles.length > 0) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [selectedFiles]);

  return (
    <div>
      {Loading && <Loader message={message} isTransacting={isTransacting} />}
      <div>
        <h1 className="text-zinc-200 leading-none mb-3 text-[2.5rem] font-extrabold">
          Website Hosting
        </h1>
        <p className="text-zinc-400  m-0 leading-tight">
          Host your static websites freely
        </p>
      </div>
      {address ? (
        <div>
          <FolderUpload isActive={isActive} handleChange={handleChange} />
          <div className="mt-5 flex flex-row justify-center">
            <CustomButton
              btnType="submit"
              styles="bg-violet-500 w-72"
              title="Deploy"
              handleClick={handleSubmit}
              status={Loading}
            />
          </div>
          <div className="mt-5">
            <DisplayTable
              title=""
              files={data?.filter((file) => file.type === "directory")}
              address={address}
              user={true}
              isLoading={isLoading}
              handleDelete={handleDelete}
            />
          </div>
        </div>
      ) : (
        <p className="font-epilogue font-semibold text-[16px] mt-2 leading-[30px] text-zinc-500">
          Please connect your wallet 🙏
        </p>
      )}
    </div>
  );
};

export default Host;
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
