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
        class="text-violet-500 transition hover:text-violet-700/75 dark:text-violet-500 dark:hover:text-violet-500/75"
      >
        <span class="sr-only">{title}</span>
        {icon}
      </a>
    </li>
  );
};

const Footer = () => {
  return (
    <footer aria-label="Site Footer" class="bg-zinc-900">
      <div class="mx-auto max-w-screen-xl px-4 pt-16 pb-6 sm:px-6 lg:px-8">
        <div class="lg:flex lg:items-center lg:justify-between">
          <div class="flex justify-center text-violet-600 dark:text-violet-300 sm:justify-start">
            <DarkspaceLogoFull
              className="h-[70px]"
            />
          </div>

          <p class="mx-auto mt-4 max-w-md text-center leading-relaxed text-zinc-400 sm:ml-0 sm:text-left lg:mr-0 lg:mt-0">
            The Next Generation of Secure and Decentralized Data Storage:
            DarkSpace
          </p>
        </div>

        <div class="mt-16 border-t pt-10 border-gray-800 sm:flex sm:items-center sm:justify-between">
          <p class="text-center text-sm text-zinc-500 sm:text-left">
            Copyright &copy; 2023. All rights reserved.
          </p>

          <ul class="mt-4 flex justify-center gap-6 sm:mt-0 sm:justify-start">
            <SocialIcon
              icon={<FaGithub className="h-5 w-5" />}
              title="github"
              link="https://github.com/Darkrove/darkspace"
            />
            <SocialIcon
              icon={<FaInstagram className="h-5 w-5" />}
              title="instagram"
              link="https://www.instagram.com/sajjadshaikh.io/"
            />
            <SocialIcon
              icon={<FaTwitter className="h-5 w-5" />}
              title="twitter"
              link="https://twitter.com/sajjads72619701"
            />
            <SocialIcon
              icon={<FaDiscord className="h-5 w-5" />}
              title="discord"
              link="https://discord.gg/Ftg4SY7NEj"
            />
            <SocialIcon
              icon={<SiHashnode className="h-5 w-5" />}
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
