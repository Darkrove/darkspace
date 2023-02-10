import React from "react";
import { FaGithub, FaInstagram, FaDiscord, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

import { DarkspaceLogoFull } from "../assets/Icons";

const SocialIcon = ({ icon, title, link }) => {
  return (
    <li>
      <a
        href={link}
        rel="noreferrer"
        target="_blank"
        className="text-violet-500 transition hover:text-violet-700/75 dark:text-violet-300 dark:hover:text-violet-500/75"
      >
        <span className="sr-only">{title}</span>
        {icon}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer aria-label="Site Footer" className="bg-zinc-900/20 backdrop-blur-m border-t border-white/20">
      <div className="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex justify-center text-violet-600 dark:text-violet-300 sm:justify-start">
            <DarkspaceLogoFull
              className="h-[70px]"
            />
          </div>

          <p className="mx-auto mt-4 max-w-md text-center leading-relaxed text-zinc-400 sm:ml-0 sm:text-left lg:mr-0 lg:mt-0">
            The Next Generation of Secure and Decentralized Data Storage:
            DarkSpace
          </p>
        </div>

        <div className="mt-16 border-t pt-10 border-gray-800 sm:flex sm:items-center sm:justify-between">
          <p className="text-center text-sm text-zinc-500 sm:text-left">
            Copyright &copy; 2023. All rights reserved.
          </p>

          <ul className="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <SocialIcon
              icon={<FaGithub classNameName="h-5 w-5" />}
              title="github"
              link="https://github.com/Darkrove/darkspace"
            />
            <SocialIcon
              icon={<FaInstagram classNameName="h-5 w-5" />}
              title="instagram"
              link="https://www.instagram.com/sajjadshaikh.io/"
            />
            <SocialIcon
              icon={<FaTwitter classNameName="h-5 w-5" />}
              title="twitter"
              link="https://twitter.com/sajjads72619701"
            />
            <SocialIcon
              icon={<FaDiscord classNameName="h-5 w-5" />}
              title="discord"
              link="https://discord.gg/Ftg4SY7NEj"
            />
            <SocialIcon
              icon={<SiHashnode classNameName="h-5 w-5" />}
              title="hashnode"
              link="https://hashnode.com/@darkrove"
            />
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
