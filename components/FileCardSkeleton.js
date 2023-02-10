import React from "react";

const FileCardSkeleton = ({ user }) => {
  return (
    <div class="sm:w-[230px] md:w-[250px] xl:w-[270px] 2xl:w-[295px] w-full rounded-[15px] bg-white/5 overflow-hidden shadow hover:shadow-md">
      <div class="flex flex-col">
        <div class="relative w-full h-[158px] object-cover rounded-[15px] loading"></div>
        <div class="flex flex-col p-4">
          <div class="block w-full h-[26px] rounded-[15px] loading"></div>
          <div className="flex justify-between flex-row mt-[15px] gap-2">
            <div className="flex w-2/6 flex-col items-start">
              <div className="h-5 rounded-[15px] w-full loading"></div>
              <div className="h-5 rounded-[15px] mt-[3px] w-full loading"></div>
            </div>
            <div className="flex w-2/6 flex-col items-end">
              <div className="h-5 rounded-[15px] w-full loading"></div>
              <div className="h-5 rounded-[15px] mt-[3px] w-full loading"></div>
            </div>
          </div>
          {!user && (
            <div className="flex items-center justify-start mt-[20px] gap-[12px]">
              <div className="w-[30px] h-[30px] overflow-hidden rounded-full loading"></div>
              <div className="flex-1 h-5 w-full loading rounded-[15px]"></div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileCardSkeleton;
