import Discord from "@/networks/discord.svg?react";
import Telegram from "@/networks/telegram.svg?react";
import Github from "@/networks/github.svg?react";

import { Logo } from "#/Logo";
import { Link } from "react-router";

interface network {
  name: string;
  logo: typeof Discord;
  link: string;
}

const networks: network[] = [
  {
    name: "Discord",
    logo: Discord,
    link: "https://discord.com/users/1065985055647875192",
  },
  { name: "Telegram", logo: Telegram, link: "https://t.me/OvochJS" },
  { name: "Github", logo: Github, link: "https://github.com/OvochJS" },
];

const networksElements = networks.map((n, i) => {
  return (
    <li key={i}>
      <a href={n.link}>
        <n.logo className="size-5 lg:size-7 2xl:size-11" />
      </a>
    </li>
  );
});

export function Footer() {
  return (
    <div className="flex justify-center bg-black">
      <div
        className={
          "w-3xl px-6 pt-7 pb-10 lg:w-5xl lg:px-12 lg:pb-15 2xl:w-384 2xl:px-25 2xl:pt-15 2xl:pb-35"
        }
      >
        <div className="flex items-baseline justify-between border-b-1 pb-1 lg:pb-4 2xl:pb-6">
          <nav className="flex justify-between gap-4 text-xs lg:gap-6 lg:text-base 2xl:gap-10 2xl:text-2xl">
            <Link to="/">Главная</Link>
            <Link to="/documentation">Справочник</Link>
            <Link to="/problems">Задачи</Link>
          </nav>
          <a
            href="https://github.com/OvochJS"
            className="text-[8px] font-bold text-neutral-400 lg:text-xs 2xl:text-base"
          >
            by @Ov0ch
          </a>
        </div>

        <div className="flex justify-between pt-1 lg:pt-3 2xl:pt-5">
          <Logo />

          <ul className="flex justify-between gap-1 lg:gap-2.5 2xl:gap-5">
            {networksElements}
          </ul>
        </div>
      </div>
    </div>
  );
}
