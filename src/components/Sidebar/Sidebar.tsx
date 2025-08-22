import data from "./data.json";

import { NavLink } from "react-router";

import type { MouseEvent as ReactMouseEvent } from "react";

interface section {
  id: number;
  title: string;
  next: section[];
}

export function Sidebar() {
  function handleClick(e: ReactMouseEvent): void {
    if (!(e.target instanceof HTMLElement)) return;

    const li = e.target.closest("li");
    if (!li) return;
    li.querySelector("ul")?.classList.toggle("hidden");
  }

  return (
    <div
      className={
        "hidden bg-[#1a1a1a] sm:block sm:w-[20%] sm:border-r sm:px-1 lg:w-[17.5%] lg:px-2 2xl:max-w-80 2xl:min-w-64 2xl:px-3 2xl:py-2"
      }
    >
      <span className="align-bottom text-[8px] text-neutral-400 lg:text-[10px] 2xl:text-sm">
        Разделы обучения:
      </span>
      <ul className="py-1" onClick={handleClick}>
        <SectionList sections={data.next} />
      </ul>
    </div>
  );
}

function SectionList({ sections }: { sections: section[] }) {
  return sections.map((section) => (
    <li key={section.id}>
      {section.next.length ? (
        <>
          <div className="relative rounded-sm py-1 pr-4 pl-1 text-[10px] after:absolute after:top-2 after:right-1 after:size-3 after:bg-[url(@/arrow.svg)] after:bg-contain hover:bg-neutral-700 lg:text-xs 2xl:text-base 2xl:after:top-3">
            {section.title}
          </div>
          <ul className="hidden pl-2">
            <SectionList sections={section.next} />
          </ul>
        </>
      ) : (
        <NavLink to="/">
          <div className="rounded-sm py-1 pr-4 pl-1 text-[10px] hover:bg-neutral-700 lg:text-xs 2xl:text-base">
            {section.title}
          </div>
        </NavLink>
      )}
    </li>
  ));
}
