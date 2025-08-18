import discord from "@/networks/discord.png";
import telegram from "@/networks/telegram.png";
import github from "@/networks/github.png";

import { Logo } from "#/Logo";
import { Link } from "react-router";

import style from "./Footer.module.scss";

export function Footer() {
  return (
    <div className="centering">
      <div className={"content " + style.footer}>
        <div className={style.topBar}>
          <nav className={style.navbar}>
            <Link to="/">Главная</Link>
            <Link to="/documentation">Справочник</Link>
            <Link to="/problems">Задачи</Link>
          </nav>
          <a href="https://github.com/OvochJS" className={style.me}>
            by @Ov0ch
          </a>
        </div>

        <div className={style.bottomBar}>
          <Logo />

          <ul className={style.networks}>
            <li>
              <a href="https://discord.com/users/1065985055647875192">
                <img src={discord} />
              </a>
            </li>
            <li>
              <a href="https://t.me/OvochJS">
                <img src={telegram} />
              </a>
            </li>
            <li>
              <a href="https://github.com/OvochJS">
                <img src={github} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
