import { Link } from "react-router";

import avatar from "@/avatar.jpg";
import { LoginMenu } from "./LoginMenu";
import { useState } from "react";

export function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = isOpen ? "" : "hidden";
    document.body.style.paddingRight = isOpen ? "" : scrollWidth + "px";
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <button
        onClick={handleClick}
        className="2xl:focus:outline-3 rounded-sm bg-stone-200 px-2 py-1 text-xs text-black outline-white hover:outline lg:px-4 lg:text-sm 2xl:px-8 2xl:text-2xl"
      >
        Войти
      </button>
      {isOpen && <LoginMenu onClick={handleClick}/>}
      <Link to="/users" className="hidden">
        <img
          src={avatar}
          alt="Профиль"
          className="size-6 rounded-full lg:size-9 2xl:size-14"
        />
      </Link>
    </div>
  );
}
