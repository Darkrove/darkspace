import Image from "next/image";
import React from "react";

import { ethereum } from "../assets";
import { formatBytes, formatDate } from "../utils";
import { useStateContext } from "../context";

const DisplayTable = ({
  title,
  isLoading,
  files,
  address,
  user,
  handleDelete,
}) => {
  const showStatus = () => {
    if (!address && !isLoading && user) {
      return (
        <p className="flex items-center justify-center space-x-2 font-epilogue font-semibold text-[16px] leading-[30px] text-[#818183]">
          Wallet is not connected!! please connect your wallet 🙏
        </p>
      );
    } else if (!isLoading && files?.length === 0) {
      return (
        <p className="flex items-center justify-center space-x-2 font-epilogue font-semibold text-[16px] leading-[30px] text-[#818183]">
          No deployment found 😬
        </p>
      );
    }
  };
  return (
    <div>
      {isLoading && (
        <div className="flex items-center justify-center space-x-2">
          <div className="w-3 h-3 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-violet-400"></div>
          <div className="w-3 h-3 rounded-full animate-pulse bg-violet-400"></div>
        </div>
      )}

      {showStatus()}

      {!isLoading && files?.length > 0 && (
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg overflow-hidden border-white/10">
                <table className="min-w-full divide-y divide-white/10">
                  <thead className="bg-white/10">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400"
                      ></th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium uppercase text-gray-400"
                      >
                        Link
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-right text-xs font-medium uppercase text-gray-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {files
                      .slice(0)
                      .reverse()
                      .map((file, id) => (
                        <tr key={file.pid}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span class="inline-flex items-center p-1 rounded-full bg-violet-300 text-white">
                              <Image
                                alt="logo"
                                src={ethereum}
                                className="w-7 h-7"
                                width={10}
                                height={10}
                              />
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            W{file.pid}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {formatDate(file.uploadTime)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {file.name}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-200">
                            {formatBytes(file.size)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                            <a
                              href={`https://gateway.pinata.cloud/ipfs/${file.hash}/`}
                              target="_blank"
                              className="text-blue-500 hover:text-blue-700"
                              rel="noreferrer"
                            >
                              link
                            </a>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              className="text-blue-500 hover:text-blue-700"
                              onClick={() => handleDelete(file.pid)}
                            >
                              delete
                            </button>
                          </td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayTable;
