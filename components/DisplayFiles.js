import React from "react";

import { FileCard, FileCardSkeleton } from "./";

const DisplayFiles = ({
  children,
  title,
  subtitle,
  isLoading,
  files,
  address,
  user,
  style,
  error,
}) => {
  const showStatus = () => {
    if (!address && !isLoading && user) {
      return (
        <p className="font-epilogue font-semibold text-[16px] mt-2 leading-[30px] text-zinc-500">
          Please connect your wallet!!
        </p>
      );
    } else if (!isLoading && files?.length === 0) {
      return (
        <p className="font-epilogue font-semibold text-[16px] leading-[30px] text-[#818183]">
          Oops!! nothing to show 😬
        </p>
      );
    }
  };

  return (
    <div className={`${style}`}>
      <div>
        <h1 className="text-zinc-200 leading-none mb-3 text-[2.5rem] font-extrabold">
          {title}
        </h1>
        <p className="text-zinc-400  m-0 leading-tight">
          {subtitle} ({files ? files?.length : "0"})
        </p>
      </div>
      {isLoading && (
        <div className="flex flex-wrap mt-[20px] gap-[26px]">
          {[0, 1, 2, 3].map((id) => (
            <FileCardSkeleton key={id} user={user} />
          ))}
        </div>
      )}
      {showStatus()}
      <div className="flex flex-wrap mt-[20px] gap-[26px]">
        {!isLoading &&
          files?.length > 0 &&
          files
            .slice(0)
            .map((file, id) => (
              <FileCard key={file.pid} {...file} user={user} />
            ))}
      </div>
      {children}
    </div>
  );
};

export default DisplayFiles;
