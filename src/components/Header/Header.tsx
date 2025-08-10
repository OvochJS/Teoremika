import { NavLink } from "react-router";

import { Logo } from "#/Logo/Logo";
import style from "./Header.module.scss";

export function Header() {
  return (
    <div className={"centering " + style.centering}>
      <div className={style.header}>
        <Logo />

        <nav className={style.navbar}>
          <NavLink to="/">Главная</NavLink>
          <NavLink to="/documentation">Справочник</NavLink>
          <NavLink to="/problems">Задачи</NavLink>

          <div className={style.searchInput}>
            <input type="text" placeholder="Поиск" />
          </div>
          <button>Войти</button>
        </nav>
      </div>
    </div>
  );
}
