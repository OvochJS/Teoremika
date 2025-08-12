import { NavLink } from "react-router";

import { Logo } from "#/Logo/Logo";
import { Profile } from "#/Profile/Profile";
import { Search } from "#/Search/Search";

import style from "./Header.module.scss";

import menu from "@/menu.svg";

export function Header() {
  return (
    <div className="centering header">
      <div className={style.header + " content"}>
        <div className={style.leftBar}>
          <button className={"button-icon " + style.menuButton}>
            <img src={menu} alt="Меню" />
          </button>
          <Logo />
        </div>

        <nav className={style.navbar}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/documentation">Справочник</NavLink>
          <NavLink to="/problems">Задачи</NavLink>

          <Search />

          <Profile />
        </nav>
      </div>
    </div>
  );
}
