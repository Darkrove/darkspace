import Image from "next/image";
import Link from "next/link";

import { BiCheck, BiCopy } from "react-icons/bi";
import useCopyToClipboard from "../lib/hooks/useCopyToClipboard";

const CardBox = ({ copyIcon, value, title }) => {
  const [copyToClipboard, { success }] = useCopyToClipboard();
  return (
    <div className="card bg-white/5 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2">
      <div className="text-zinc-400 flex gap-4 m-0 justify-between items-center">
        <p>{title}</p>
        {copyIcon && (
          <button className="p-2 hover:rounded-md hover:bg-zinc-800 hover:backdrop-blur-sm" onClick={() => copyToClipboard(value)}>
            {success ? (
              <BiCheck size="1rem" className="text-green-400" />
            ) : (
              <BiCopy size="1rem" className="text-white"/>
            )}
          </button>
        )}
      </div>
      <h3 className="text-zinc-200 m-0 truncate">{value || "-"}</h3>
    </div>
  );
};

export default CardBox;
