import { Link } from "react-router";

import avatar from "@/avatar.jpg";

export function Profile() {
  return (
    <div>
      <button className="rounded-sm bg-stone-200 px-2 py-1 text-xs text-black outline-white hover:outline lg:px-4 lg:text-sm 2xl:px-8 2xl:text-2xl 2xl:focus:outline-3">
        Войти
      </button>
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
