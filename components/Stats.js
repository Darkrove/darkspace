import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowCircleUpRight, Copy, Checks } from "phosphor-react"


import { LinkLogo } from "../assets/Icons";
import CopyButton from "./ui/copy-button";
import { useStateContext } from "../context";
import { shortenAddress } from "../utils";

export default function Stats({ lastUpdate, imageCount, videoCount, webCount, address, balance, storageUsed }) {
  const { setActivePage } = useStateContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const statCards = [
    {
      title: "Wallet Address",
      data: address,
      value: shortenAddress(address),
      link: false,
      active: "profile",
    },
    {
      title: "Wallet Balance",
      value: `${parseFloat(balance?.data?.displayValue).toFixed(3)} ${" "} ${balance?.data?.symbol}`,
      link: false,
      active: "profile",
    },
    {
      title: "Image Count",
      value: `${imageCount} / ထ`,
      link: "/dashboard/photos",
      active: "photos",
    },
    {
      title: "Video Count",
      value: `${videoCount} / ထ`,
      link: "/dashboard/videos",
      active: "videos",
    },
    {
      title: "Website Count",
      value: `${webCount} / ထ`,
      link: "/dashboard/host",
      active: "host",
    },
    {
      title: "Last Upload",
      value: lastUpdate,
      link: "/dashboard/recent",
      active: "recent",
    },
    {
      title: "Storage Used",
      value: storageUsed,
      link: "/dashboard/files",
      active: "files",
    },
    {
      title: "Total Files Uploaded",
      value: imageCount + videoCount + webCount,
      link: "/dashboard/files",
      active: "files",
    },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4">
      {mounted &&
        statCards.map((card, index) => {
          return (
            <div
              className="card bg-white/5 rounded-lg shadow-xl p-4 flex flex-col justify-between gap-2"
              key={index}
            >
              {card.link ? (
                <Link
                  className="text-zinc-400 flex gap-4 m-0 items-center"
                  href={card.link}
                  rel="noreferrer"
                  onClick={() => setActivePage(card.active)}
                >
                  {card.title}  <ArrowCircleUpRight size="1rem" className="p-2 text-white" weight="bold" />
                </Link>
              ) : (
                <div className="flex gap-4 m-0 items-center">
                  {card.title}
                  <CopyButton value={card.data || card.value} />
                </div>
              )}

              <h3 className="text-zinc-200 m-0">
                {card.value || "-"}
              </h3>
            </div>
          );
        })}
    </div>
  );
}
