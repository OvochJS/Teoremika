import data from "./data.json";

import { NavLink } from "react-router";
import style from "./Sidebar.module.scss";

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
    li.classList.toggle(style.hiddenList);
  }

  return (
    <div className={style.sidebar}>
      <span className={style.title}>Разделы обучения</span>
      <ul className={style.threeSections} onClick={handleClick}>
        <SectionList sections={data.next} />
      </ul>
    </div>
  );
}

function SectionList({ sections }: { sections: section[] }) {
  return sections.map((section) => (
    <li key={section.id} className={style.hiddenList}>
      {section.next.length ? (
        <>
          <div className={style.section + " " + style.item}>{section.title}</div>
          <ul className="hidden">
            <SectionList sections={section.next} />
          </ul>
        </>
      ) : (
        <NavLink to="/">
          <div className={style.item}>{section.title}</div>
        </NavLink>
      )}
    </li>
  ));
}
