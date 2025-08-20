import { Sidebar } from "#/Sidebar/Sidebar";
import { Book } from "#/Book/Book";


export function Documentation() {
  return (
    <div className="flex justify-between bg-neutral-950">
      <Sidebar />
      <Book title="ТЕст" date="3 сентебря" />
    </div>
  );
}
