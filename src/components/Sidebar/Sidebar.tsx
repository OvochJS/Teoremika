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
        "hidden flex-1 bg-[#1a1a1a] px-1 sm:block sm:max-w-80 sm:min-w-34 sm:border-r"
      }
    >
      <span className="text-[8px] text-neutral-400 align-bottom">Разделы обучения</span>
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
          <div className="relative rounded-sm py-1 pr-4 pl-1 text-[10px] after:absolute after:top-2 after:right-1 after:size-3 after:bg-[url(@/arrow.svg)] after:bg-contain hover:bg-neutral-700">
            {section.title}
          </div>
          <ul className="hidden pl-2">
            <SectionList sections={section.next} />
          </ul>
        </>
      ) : (
        <NavLink to="/">
          <div className="rounded-sm py-1 pr-4 pl-1 text-[10px] hover:bg-neutral-700">
            {section.title}
          </div>
        </NavLink>
      )}
    </li>
  ));
}
