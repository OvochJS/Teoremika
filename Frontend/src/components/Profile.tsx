
import { LoginMenu } from "./LoginMenu";
import { useState } from "react";
import { useAppSelector } from "$/hooks";

export function Profile() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useAppSelector((state) => state.user.value)

  function handleClick() {
    const scrollWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = isOpen ? "" : "hidden";
    document.body.style.paddingRight = isOpen ? "" : scrollWidth + "px";
    setIsOpen(!isOpen);
  }

  return (
<div>
      {user ? (
        <>
          <h1 className="inline-block text-[8px] font-bold lg:text-sm 2xl:text-xl">{user.userName} {user.score}</h1>
        </>
      ) : (
        <>
          <button
            onClick={handleClick}
            className="2xl:focus:outline-3 rounded-sm bg-stone-200 px-2 py-1 text-xs text-black outline-white hover:outline lg:px-4 lg:text-sm 2xl:px-8 2xl:text-2xl"
          >
            Войти
          </button>
          {isOpen && <LoginMenu onClick={handleClick} />}
        </>
      )}
    </div>

  );
}
