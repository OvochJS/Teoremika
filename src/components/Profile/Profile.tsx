import { Link } from "react-router";

import style from "./Profile.module.scss";
import avatar from "@/avatar.jpg";

export function Profile() {
  return (
    <div>
      <button className={style.buttonLogin}>Войти</button>
      <Link to="/users" className={style.avatar}>
        <img src={avatar} alt="Профиль" />
      </Link>
    </div>
  );
}
