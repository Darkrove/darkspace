import React, { useContext, createContext, useState } from "react";
import { useRouter } from "next/router";
import Web3 from "web3";
import {
  useAddress,
  useContract,
  useMetamask,
  useDisconnect,
  useContractWrite,
  useBalance,
} from "@thirdweb-dev/react";

import { padString, unpadString, formatDate, formatBytes } from "../utils";
import { toast } from "../components/ui/toast"

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0xAF56d5F4Fb6F97118B9afc032A2E5beE5315b6b6"
  );
  const { mutateAsync: addFile, isLoading } = useContractWrite(
    contract,
    "addFile"
  );
  const { mutateAsync: updateFileStatus } = useContractWrite(
    contract,
    "updateFileStatus"
  );
  const router = useRouter();

  const getPageName = () => {
    const path = router.asPath;
    const result = path.split("/");
    return result[result.length - 1];
  };

  const address = useAddress();
  const balance = useBalance();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  const [activePage, setActivePage] = useState(getPageName());
  const [files, setFiles] = useState([]);


  const getFileByHash = async (hash) => {
    const data = await contract.call("getFileByHash", [hash])
    if (!data) return
    const parsedFiles = data.map((file, i) => ({
      owner: file.owner,
      username: unpadString(file.username),
      profile: file.profile,
      name: unpadString(file.fileName),
      type: unpadString(file.fileType),
      size: file.fileSize.toNumber(),
      hash: file.fileHash,
      uploadTime: file.fileUploadTime.toNumber(),
      pid: file.id.toNumber(),
      status: file.fileStatus,
    }));
    return parsedFiles.filter((file) => file.hash !== "" && file.status !== "delete");
  }

  const publishFile = async (
    filename,
    type,
    size,
    __hash,
    __username,
    __profile
  ) => {
    const _username = padString(__username);
    const _profile = __profile;
    const _filename = padString(filename);
    const _filesize = size;
    const _filetype = padString(type);
    const _filehash = __hash;
    try {
      const data = await addFile({ args: [_username, _profile, _filename, _filesize, _filetype, _filehash] });
      // TODO toast updated
      toast({
        icon: 'Network',
        title: 'Uploaded',
        message: 'Congratulation, Your data is now on blockchain',
        type: 'success',
      })
      console.info("contract call successs", data);
    } catch (err) {
      // TODO toast updated
      toast({
        icon: 'X',
        title: 'Something went wrong',
        message: 'Got some issues please try again',
        type: 'error',
      })
      console.error("contract call failure", err);
    }
  };

  const updateFile = async (_index, _status) => {
    try {
      const data = await updateFileStatus({ args: [_index, _status] })
      // TODO toast updated
      toast({
        icon: 'Network',
        title: 'Updated',
        message: 'Your data is updated',
        type: 'success',
      })
      console.info("contract call successs", data);
    } catch (err) {
      // TODO toast updated
      toast({
        icon: 'X',
        title: 'Something went wrong',
        message: 'Got some issues please try again',
        type: 'error',
      })
      console.error("contract call failure", err);
    }
  };

  const getFiles = async () => {
    const data = await contract.call("getFiles");
    if (data.length > 0) {
      const parsedFiles = data.map((file, i) => ({
        owner: file.owner,
        username: unpadString(file.username),
        profile: file.profile,
        name: unpadString(file.fileName),
        type: unpadString(file.fileType),
        size: file.fileSize.toNumber(),
        hash: file.fileHash,
        uploadTime: file.fileUploadTime.toNumber(),
        pid: file.id.toNumber(),
        status: file.fileStatus,
      }));
      // console.warn(parsedFiles)
      return parsedFiles;
    } else {
      return null;
    }
  };

  const getPublicFiles = async () => {
    const data = await contract.call("getPublicFiles");
    if (data.length > 0) {
      const parsedFiles = data.map((file, i) => ({
        owner: file.owner,
        username: unpadString(file.username),
        profile: file.profile,
        name: unpadString(file.fileName),
        type: unpadString(file.fileType),
        size: file.fileSize.toNumber(),
        hash: file.fileHash,
        uploadTime: file.fileUploadTime.toNumber(),
        pid: file.id.toNumber(),
        status: file.fileStatus,
      }));
      // console.warn(parsedFiles)
      return parsedFiles.filter((file) => file.hash !== "");
    } else {
      return null;
    }
  };

  const getUserFiles = async () => {
    const allFiles = await getFiles();
    if (!allFiles) return
    const filteredFiles = allFiles.filter(
      (file) => file.owner === address && file.status !== "delete"
    );
    return filteredFiles;
  };

  const getUserVideo = async () => {
    const allFiles = await getUserFiles();
    const fileResponse = allFiles.filter((item) => item.type !== "video/mp4");
    return fileResponse;
  };

  const getFileStats = async () => {
    const allFiles = await getUserFiles();
    if (!allFiles) return
    const latest = allFiles.reverse()
    const lastUpdate = allFiles.length > 0 ? formatDate(latest[0]?.uploadTime) : "not uploaded yet"

    const webCount = allFiles.reduce(
      (total, f) => (f.type === "directory" ? total + 1 : total + 0),
      0
    );
    const imageCount = allFiles.reduce(
      (total, f) => (f.type.split("/")[0] === "image" ? total + 1 : total + 0),
      0
    );
    const videoCount = allFiles.reduce(
      (total, f) => (f.type.split("/")[0] === "video" ? total + 1 : total + 0),
      0
    );
    const storageUsed = allFiles.reduce(
      (total, f) => (total + f.size), 0
    )
    return [lastUpdate, imageCount, videoCount, webCount, formatBytes(storageUsed)];
  };

  return (
    <StateContext.Provider
      value={{
        address,
        balance,
        connect,
        disconnect,
        contract,
        uploadFile: publishFile,
        updateFile,
        getPublicFiles,
        getUserFiles,
        activePage,
        setActivePage,
        files,
        setFiles,
        getUserVideo,
        getFileStats,
        getFileByHash
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
