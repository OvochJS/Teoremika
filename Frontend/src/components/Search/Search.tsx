import { apiDocumentation } from "$/services/documentationService";
import { skipToken } from "@reduxjs/toolkit/query";
import { useState } from "react";
import { SearchResult } from "./SearchResult";
import { useDebounce } from "$/hooks";

export function Search() {
  const [value, setValue] = useState("");
  const [isFocus, setFocus] = useState(false);

  const debouncedValue = useDebounce(value, 300);

  const { data, isLoading, error } = apiDocumentation.useSearchSectionQuery(
    debouncedValue || skipToken,
  );

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  return (
    <div>
      <div className="relative after:absolute after:right-1 after:top-1.5 after:size-4 after:bg-[url(@/search.svg)] after:bg-cover sm:after:top-1 2xl:after:size-8">
        <input
          type="text"
          onInput={handleInput}
          onFocus={() => setFocus(true)}
          onBlur={() => setTimeout(() => setFocus(false), 100)}
          value={value}
          placeholder="Поиск"
          className="w-30 lg:w-42 2xl:w-84 2xl:focus:outline-3 h-6 rounded-md bg-stone-200 pl-2 pr-5 text-xs text-black placeholder:text-stone-600 focus:outline focus:outline-white lg:h-6 lg:pr-6 lg:text-base 2xl:h-10 2xl:rounded-xl 2xl:pr-10 2xl:text-2xl"
        />
        <div
          className={
            (isFocus ? "block" : "hidden") +
            " w-50 lg:w-42 2xl:w-84 absolute top-[120%] rounded-md bg-stone-200 px-1 py-1 text-black shadow-lg shadow-black 2xl:rounded-xl 2xl:text-2xl"
          }
        >
          {isLoading ? (
            <span className="block px-1 py-0.5">Загрузка</span>
          ) : error ? (
            <span className="block px-1 py-0.5">Произошла Ошибка</span>
          ) : (
            <SearchResult result={data ?? []} />
          )}
        </div>
      </div>
    </div>
  );
}
