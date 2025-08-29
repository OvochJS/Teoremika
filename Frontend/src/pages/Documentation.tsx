import { Sidebar } from "#/Sidebar";
import { Book } from "#/Book";
import { NavSection } from "#/NavSection";
import { Route, Routes } from "react-router";

export function Documentation() {
  return (
    <div className="flex w-[100%] justify-between bg-neutral-900 min-h-100">
      <Sidebar />
      <Routes>
        <Route path="/:title?" element={<Book />} />
      </Routes>
      <NavSection />
    </div>
  );
}
