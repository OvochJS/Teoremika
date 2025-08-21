import { Sidebar } from "#/Sidebar/Sidebar";
import { Book } from "#/Book/Book";
import { NavSection } from "#/NavSection/NavSection";

export function Documentation() {
  return (
    <div className="flex justify-between bg-neutral-900">
      <Sidebar />
      <Book title="ТЕст" date="3 сентебря" />
      <NavSection />
    </div>
  );
}
