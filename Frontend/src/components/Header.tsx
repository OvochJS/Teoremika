import { NavLink } from "react-router";

import { Logo } from "#/Logo";
import { Profile } from "#/Profile";
import { Search } from "#/Search/Search";

import { Menu } from "./Menu";

export function Header() {
  const navSectionStyle =
    "rounded-sm px-2 py-1 hover:bg-neutral-800 [&.active]:bg-neutral-700";

  return (
    <header className="sticky top-0 z-9999 flex justify-center bg-black">
      <div className="flex w-3xl items-center justify-between px-6 py-2 sm:py-1 lg:w-5xl lg:px-12 2xl:w-384 2xl:px-25">
        <div className="flex gap-1">
          <Menu />
          <Logo />
        </div>

        <div className="flex items-center justify-between gap-2 sm:text-xs lg:gap-5 lg:text-base 2xl:gap-9 2xl:text-2xl">
          <nav className="hidden sm:flex sm:items-center sm:justify-between sm:gap-1 lg:gap-3 2xl:gap-5">
            <NavLink to="/" className={navSectionStyle}>
              Главная
            </NavLink>
            <NavLink to="/documentation" className={navSectionStyle}>
              Справочник
            </NavLink>
            <NavLink to="/problems" className={navSectionStyle}>
              Задачи
            </NavLink>
          </nav>
          <Search />

          <Profile />
        </div>
      </div>
    </header>
  );
}
