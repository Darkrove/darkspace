import React from "react";
import Image from "next/image";

const folderUpload = ({ isActive, handleChange }) => {
  return (
    <div>
      <div className="m-auto px-0 mt-5 sm:px-0 w-full">
        <div className="relative group w-full h-[15rem] flex justify-center items-center">
          <div
            className={`absolute inset-0 w-full h-full rounded-xl border-[1px] bg-transparent bg-opacity-80 shadow-2xl backdrop-blur-xl group-hover:bg-opacity-70 group-hover:border-violet-500 transition  duration-300 ${
              isActive ? "border-green-400" : "border-[#3a3a43]"
            }`}
          ></div>
          <input
            required
            directory=""
            webkitdirectory=""
            type="file"
            onChange={handleChange}
            className="relative z-10 opacity-0 h-full w-full cursor-pointer"
          ></input>
          <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full m-auo flex items-center justify-center">
            <div className="space-y-6 text-center">
              <Image
                src="/assets/file.png"
                className="sm:w-40 w-32 m-auto"
                alt="illustration"
                height={500}
                width={600}
              />
              <p className="text-gray-700 text-lg">
                Upload a project containg CSS, HTML & JS inside same folder{" "}
                <label
                  htmlFor="dragOver"
                  title="Upload a file"
                  className="relative z-1 cursor-pointer text-violet-500 block"
                >
                  Upload folder or all code files
                </label>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default folderUpload;
