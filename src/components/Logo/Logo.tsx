import { Link } from "react-router";
import logo from "@/logoTM-white.png";
import style from "./Logo.module.scss";

export function Logo() {
  return (
    <Link to="/" className={style.logo}>
      <img src={logo} />
      <span>TEOREMIKA</span>
    </Link>
  );
}
