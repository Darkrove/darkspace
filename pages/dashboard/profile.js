import React, { useState, useEffect } from "react";
import { useSession, signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import { getServerSession } from "next-auth/next";

import { authOptions } from "../api/auth/[...nextauth]";
import { useStateContext } from "../../context";
import { CustomButton, StatsCard, ProfileCard, Stats } from "../../components";
import { shortenAddress } from "../../utils";
import { imageIcon, videoIcon, hostIcon } from "../../assets";

const Profile = () => {
  const { address, balance, contract, getFileStats } = useStateContext();
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState();
  const [webCount, setWebCount] = useState(0);
  const [imageCount, setImageCount] = useState(0);
  const [videoCount, setVideoCount] = useState(0);
  const [host, setHost] = useState(0);

  const showStatus = () => {
    if (!address && !isLoading) {
      return (
        <p className="flex items-center justify-center space-x-2 font-epilogue font-semibold text-[16px] leading-[30px] text-[#818183]">
          Wallet is not connected!! please connect your wallet 🙏
        </p>
      );
    }
  };

  const fetchStats = async () => {
    setIsLoading(true);
    const counts = await getFileStats();
    if (!counts) return;
    console.log(counts);
    setLastUpdate(counts[0]);
    setImageCount(counts[1]);
    setVideoCount(counts[2]);
    setWebCount(counts[3]);
    setIsLoading(false);
  };

  useEffect(() => {
    if (address && contract) fetchStats();
    if (session?.user?.email) {
      const split = session?.user?.image?.split("/");
      const host = split[2]?.split(".")[1];
      console.log(host);
      if (host === "githubusercontent") {
        setHost("github");
      } else if (host === "googleusercontent") {
        setHost("google");
      } else if (host === "discordapp") {
        setHost("discord");
      }
    }
  }, [
    address,
    contract,
    session?.user?.email,
    session?.user?.image,
  ]);

  return (
    <div>
      <div className="flex justify-center items-center flex-col rounded-[10px]">
        <div className="w-full flex flex-col items-center relative">
          <section className="flex flex-col w-full justify-between lg:mt-0 md:mt-0 prose prose-a:no-underline gap-6">
            <div>
              <h1 className="text-zinc-200 leading-none mb-3 text-[2.5rem] font-extrabold">
                Profile
              </h1>
              <p className="text-zinc-400 m-0 leading-tight">
                Random stats and stuff related to you.
              </p>
            </div>
            <ProfileCard host={host} user={session?.user} />
            <Stats
              lastUpdate={lastUpdate}
              imageCount={imageCount}
              videoCount={videoCount}
              webCount={webCount}
              address={address}
              balance={balance}
            />
          </section>
          {/* <Footer /> */}
        </div>
      </div>
    </div>
  );
};

export default Profile;

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
