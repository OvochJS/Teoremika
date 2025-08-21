import { useAppSelector } from "$/hooks";

export function NavSection() {
  const sections = useAppSelector((state) => state.navSection.value);

  const links = sections.map((section, i) => {
    return (
      <a
        href={"#chapter-" + i}
        key={i}
        className="p-1 my-0.5 text-[10px] rounded-sm hover:bg-neutral-700"
      >
        {section}
      </a>
    );
  });

  return (
    <div className="hidden flex-1 bg-[#1a1a1a] px-3 lg:block lg:max-w-48 lg:border-l">
      <span className="align-bottom text-[8px] text-neutral-400">
        Содержание:
      </span>
      <div className="flex flex-col pt-1">{links}</div>
    </div>
  );
}
