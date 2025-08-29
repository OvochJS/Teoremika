import { NavLink, Route, Routes } from "react-router";

import MenuIcon from "@/menu.svg?react";
import Cancel from "@/cancel.svg?react";

import { useState } from "react";
import { Sidebar } from "./Sidebar";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  const sectionClass =
    "my-1 rounded-sm p-1 text-left hover:bg-neutral-800 [&.active]:bg-neutral-700";

  return (
    <>
      <button className="button-icon block sm:hidden" onClick={handleClick}>
        {isOpen ? (
          <Cancel className="size-5" />
        ) : (
          <MenuIcon className="size-5" />
        )}
      </button>

      <div
        className={
          "absolute left-0 top-10 w-[70%] max-h-[70vh] overflow-auto rounded-br-2xl bg-black px-3 pt-3 pb-5 sm:hidden" +
          (isOpen ? " translate-x-0" : " -translate-x-full")
        }
      >
        <nav className="flex flex-col justify-between text-sm">
          <NavLink className={sectionClass} to="/">
            Главная
          </NavLink>
          <NavLink className={sectionClass} to="/documentation">
            Справочник
          </NavLink>
          <NavLink className={sectionClass} to="/problems">
            Задачи
          </NavLink>
          <Routes>
            <Route
              path="documentation"
              element={<Sidebar mobileVisible={true} />}
            ></Route>
          </Routes>
        </nav>
      </div>
    </>
  );
}
