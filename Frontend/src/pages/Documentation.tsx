import { Sidebar } from "#/Sidebar";
import { Book } from "#/Book/Book";
import { NavSection } from "#/NavSection/NavSection";

export function Documentation() {
  return (
    <div className="flex w-[100%] justify-between bg-neutral-900 min-h-100">
      <Sidebar />
      <Book/>
      <NavSection />
    </div>
  );
}
