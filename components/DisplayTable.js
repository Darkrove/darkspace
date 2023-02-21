import Image from "next/image";
import React from "react";
import { BiCheck, BiCopy, BiLinkExternal, BiTrash } from "react-icons/bi";

import { ethereum } from "../assets";
import { formatBytes, formatDate } from "../utils";
import useCopyToClipboard from "../lib/hooks/useCopyToClipboard";

const Row = ({ file, handleDelete }) => {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  return (
    <tr key={file.pid}>
      <td className="px-6 py-4 text-center whitespace-nowrap">
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
      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-zinc-200">
        W{file.pid}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-zinc-200">
        {formatDate(file.uploadTime)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-zinc-200">
        {file.name}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-center text-zinc-200">
        {formatBytes(file.size)}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
        <div class="inline-flex rounded-md shadow-sm">
          <button
            type="button"
            onClick={() => handleDelete(file.pid)}
            class="p-2 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-1 focus:ring-violet-600 transition-all text-sm bg-zinc-800 hover:bg-zinc-600 border-zinc-700 text-zinc-400"
          >
            <BiTrash size="1rem" className="text-white" />
          </button>
          <a
            href={`https://gateway.pinata.cloud/ipfs/${file.hash}/`}
            target="_blank"
            rel="noreferrer"
            class="p-2 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-1 focus:ring-violet-600 transition-all text-sm bg-zinc-800 hover:bg-zinc-600 border-zinc-700 text-zinc-400"
          >
            <BiLinkExternal size="1rem" className="text-white" />
          </a>
          <button
            class="p-2 inline-flex justify-center items-center gap-2 -ml-px first:rounded-l-lg first:ml-0 last:rounded-r-lg border font-medium align-middle focus:z-10 focus:outline-none focus:ring-1 focus:ring-violet-600 transition-all text-sm bg-zinc-800 hover:bg-zinc-600 border-zinc-700 text-zinc-400"
            onClick={() =>
              copyToClipboard(`https://gateway.pinata.cloud/ipfs/${file.hash}`)
            }
          >
            {success ? (
              <BiCheck size="1rem" className="text-green-400" />
            ) : (
              <BiCopy size="1rem" className="text-white" />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

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
          Wallet is not connected!! please connect your wallet.
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
                        className="px-6 py-3 text-center text-xs font-medium uppercase text-zinc-400"
                      ></th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase text-zinc-400"
                      >
                        Id
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase text-zinc-400"
                      >
                        Date
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase text-zinc-400"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase text-zinc-400"
                      >
                        Size
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium uppercase text-zinc-400"
                      >
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200">
                    {files
                      .slice(0)
                      .reverse()
                      .map((file, id) => (
                        <Row
                          key={file.pid}
                          file={file}
                          handleDelete={handleDelete}
                        />
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
