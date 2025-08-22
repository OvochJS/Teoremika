import { useAppSelector } from "$/hooks";

export function NavSection() {
  const sections = useAppSelector((state) => state.navSection.value);

  const links = sections.map((section, i) => {
    return (
      <a
        href={"#chapter-" + i}
        key={i}
        className="my-0.5 rounded-sm p-1 text-[10px] hover:bg-neutral-700 2xl:text-base"
      >
        {section}
      </a>
    );
  });

  return (
    <div className="hidden bg-[#1a1a1a] px-3 lg:block lg:w-[17.5%] lg:max-w-50 lg:border-l 2xl:max-w-68 2xl:py-2">
      <span className="align-bottom text-[8px] text-neutral-400 2xl:text-sm">
        Содержание:
      </span>
      <div className="flex flex-col pt-1">{links}</div>
    </div>
  );
}
