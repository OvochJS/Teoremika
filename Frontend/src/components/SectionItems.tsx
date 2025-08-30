import type { Section } from "$/services/documentationService";
import { NavLink } from "react-router";

export function SectionItems({ sections }: { sections: Section[] }) {
  return sections.map((section) => (
    <li key={section.id}>
      {section.children.length ? (
        <>
          <div className="relative rounded-sm py-1 pr-5 pl-1 text-sm after:absolute after:top-2 after:right-1 after:size-3 after:bg-[url(@/arrow.svg)] after:bg-contain hover:bg-neutral-700 sm:text-[10px] lg:text-xs 2xl:text-base 2xl:after:top-3">
            {section.title}
          </div>
          <ul className="hidden pl-2">
            <SectionItems sections={section.children} />
          </ul>
        </>
      ) : (
        <NavLink
          className="my-1 block rounded-sm py-1 pr-5 pl-1 text-sm hover:bg-neutral-700 sm:text-[10px] lg:text-xs 2xl:text-base [&.active]:bg-neutral-700"
          to={`/documentation/${section.title}/${section.idMarkdownFile}`}
        >
          {section.title}
        </NavLink>
      )}
    </li>
  ));
}