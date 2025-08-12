import searchWh from "@/searchWh.svg";

import style from "./Search.module.scss";

export function Search() {
  return (
    <div>
      <div className={style.searchInput}>
        <input type="text" placeholder="Поиск" />
      </div>

      <button className={"button-icon " + style.searchButton}>
        <img src={searchWh} alt="Поиск"/>
      </button>
    </div>
  );
}
