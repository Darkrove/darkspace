import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { MediaModal } from "./";
import { tagType, profile, userProfile, verticalMenu, videoIcon, imageIcon } from "../assets";
import { formatBytes, formatDate, capitalizeFirstLetter } from "../utils";
import { generateVideoThumbnailViaUrl } from "../utils/thumbnailGenerator"

const FileCard = ({
  description,
  hash,
  name,
  owner,
  pid,
  size,
  username,
  profile,
  type,
  uploadTime,
  handleClick,
  user,
  status
}) => {
  const customLoader = ({ src, width, quality }) => {
    return `https://s3.amazonaws.com/demo/image/${src}?w=${width}&q=${quality || 75
      }`;
  };
  const gateways = ["ipfs.io", "gateway.ipfs.io", "cloudflare-ipfs.com", "gateway.pinata.cloud"]
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState(`https://${gateways[Math.floor(Math.random() * gateways.length)]}/ipfs/${hash}`);
  const [fileSrc, setfileSrc] = useState(`https://${gateways[Math.floor(Math.random() * gateways.length)]}/ipfs/${hash}`);
  const [firstUpdate, setFirstUpdate] = useState(true);

  useEffect(() => {
    const generateThumbnail = async () => {
      try {
        const res = await generateVideoThumbnailViaUrl(fileSrc, 3);
        setThumbnail(res);
      } catch (error) {
        console.log(error);
      }
    };

    if (firstUpdate && type === "video/mp4") {
      generateThumbnail()
      setFirstUpdate(false)
    }
  }, [firstUpdate, type, fileSrc])

  return (
    <div className="sm:w-[230px] md:w-[250px] xl:w-[270px] 2xl:w-[295px] w-full rounded-[15px] bg-zinc-800 cursor-pointer">
      <div className="relative overflow-hidden rounded-[15px]">
        <Image
          src={thumbnail}
          alt="image"
          width={400}
          height={300}
          loading="lazy"
          onLoadingComplete={() => setIsLoading(false)}
          onClick={() => setShowModal(true)}
          className={
            "duration-700 ease w-full h-[158px] object-cover rounded-[15px] hover:opacity-60 " +
            (isLoading
              ? "scale-110 grayscale blur-2xl"
              : "scale-100 blur-0 grayscale-0")
          }
        />
        <Image alt="icon" className="fill-orange-90 absolute top-0 right-0 h-6 w-6 m-2" src={type === "video/mp4" ? videoIcon : imageIcon} width={50} height={50}></Image>
      </div>
      {showModal && (
        <MediaModal
          id={pid}
          setOpenModal={setShowModal}
          src={`https://ipfs.io/ipfs/${hash}`}
          hash={hash}
          name={name}
          type={type}
          username={username.toLowerCase()}
          user={user}
          status={status}
        />
      )}
      <div className="flex flex-col p-4">
        <div className="block">
          <h3 className="font-epilogue font-medium text-[15px] text-zinc-200 text-left leading-[26px] truncate">
            {name}
          </h3>
        </div>

        <div className="flex justify-between flex-wrap mt-[15px] gap-2">
          <div className="flex flex-col items-start">
            <h4 className="font-epilogue font-semibold text-[14px] text-zinc-300 leading-[22px]">
              File size
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-zinc-500 sm:max-w-[120px] truncate">
              {formatBytes(size)}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <h4 className="font-epilogue font-semibold text-[14px] text-zinc-300 leading-[22px]">
              Upload time
            </h4>
            <p className="mt-[3px] font-epilogue font-normal text-[12px] leading-[18px] text-zinc-500 sm:max-w-[120px] truncate">
              {formatDate(uploadTime)}
            </p>
          </div>
        </div>
        {!user ? (
          <div className="flex items-center justify-start mt-[20px] gap-[12px]">
            <div className="w-[30px] h-[30px] overflow-hidden rounded-full flex justify-center items-center bg-[#13131a]">
              <Image
                src={profile}
                alt="user"
                className="object-fill"
                width={100}
                height={100}
              />
            </div>
            <p className="flex-1 text-left font-epilogue font-normal text-[12px] text-zinc-500 truncate">
              by <span className="text-zinc-300">{capitalizeFirstLetter(username)}</span>
            </p>
          </div>
        ) : null}


      </div>
    </div>
  );
};

export default FileCard;

export async function getStaticProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  }
}