import { NavLink } from "react-router";

import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import { useAppDispatch } from "$/hooks";
import { fetchMarkdown } from "$/store/reducers/BookSlice";


interface Section {
  id: number;
  title: string;
  children: Section[];
}

export function Sidebar({ mobileVisible = false }) {
  const [data, setData] = useState<Section[]>([]);

  useEffect(() => {
    let ignore = false;

    fetch("/api/v1/documentation/sections")
      .then((response) => response.json())
      .then((json) => {
        if (!ignore) {
          setData(json as Section[]);
        }
      })
      .catch((err) => {
        console.error("Не удалось получить данные", err);
      });

    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(e: ReactMouseEvent): void {
    if (!(e.target instanceof HTMLElement)) return;

    const li = e.target.closest("li");
    if (!li) return;
    li.querySelector("ul")?.classList.toggle("hidden");
  }

  return (
    <div
      className={
        (mobileVisible ? "" : "hidden ") +
        "sm:block sm:w-[20%] sm:border-r sm:px-1 lg:w-[17.5%] lg:px-2 2xl:max-w-80 2xl:min-w-64 2xl:px-3 2xl:py-2"
      }
    >
      <span className="py-1 pr-12 pl-1 text-neutral-400 sm:align-bottom sm:text-[8px] sm:text-neutral-400 lg:text-[10px] 2xl:text-sm">
        Разделы обучения:
      </span>
      <ul className="py-1" onClick={handleClick}>
        <SectionList sections={data} />
      </ul>
    </div>
  );
}

function SectionList({ sections }: { sections: Section[] }) {
  const dispatch = useAppDispatch();

  return sections.map((section) => (
    <li key={section.id}>
      {section.children.length ? (
        <>
          <div className="relative rounded-sm py-1 pr-5 pl-1 text-sm after:absolute after:top-2 after:right-1 after:size-3 after:bg-[url(@/arrow.svg)] after:bg-contain hover:bg-neutral-700 sm:text-[10px] lg:text-xs 2xl:text-base 2xl:after:top-3">
            {section.title}
          </div>
          <ul className="hidden pl-2">
            <SectionList sections={section.children} />
          </ul>
        </>
      ) : (
        <NavLink to={"/documentation/" + section.title} onClick={() => {void dispatch(fetchMarkdown(section.title))}}>
          <div className="rounded-sm py-1 pr-5 pl-1 text-sm hover:bg-neutral-700 sm:text-[10px] lg:text-xs 2xl:text-base">
            {section.title}
          </div>
        </NavLink>
      )}
    </li>
  ));
}
