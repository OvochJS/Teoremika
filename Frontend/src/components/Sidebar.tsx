import type { MouseEvent as ReactMouseEvent } from "react";
import { apiDocumentation } from "$/services/documentationService";
import { SectionItems } from "./SectionItems";

export function Sidebar({ mobileVisible = false }) {
  const {
    data = [],
    error,
    isLoading,
  } = apiDocumentation.useGetSectionsQuery("");
  if (error) console.log(error);

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

      {error ? (
        <p className="py-1 px-1">
          {"status" in error ? `Код ошибки[${error.status}]:` : "Ошибка:"} Не
          удалось загрузить данные
        </p>
      ) : isLoading ? (
        <p>Загрузка...</p>
      ) : (
        <ul className="py-1" onClick={handleClick}>
          <SectionItems sections={data} />
        </ul>
      )}
    </div>
  );
}

function handleClick(e: ReactMouseEvent): void {
  if (!(e.target instanceof HTMLElement)) return;

  const li = e.target.closest("li");
  if (!li) return;
  li.querySelector("ul")?.classList.toggle("hidden");
}
