import { Sidebar } from "#/Sidebar/Sidebar";
import { Book } from "#/Book/Book";

import style from "./Documentation.module.scss";

export function Documentation() {
  return (
    <div className={style.container}>
      <Sidebar />
      <Book />
      <div className={style.leftbar}></div>
    </div>
  );
}
