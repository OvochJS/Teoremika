import searchWh from "@/searchWh.svg";

export function Search() {
  return (
    <div>
      <div className="relative hidden after:absolute after:bg-[url(@/search.svg)] after:bg-cover sm:block sm:after:top-1 sm:after:right-1 sm:after:size-3 lg:after:size-4 2xl:after:size-8">
        <input
          type="text"
          placeholder="Поиск"
          className="h-5 w-30 rounded-md bg-stone-200 pr-5 pl-2 text-xs text-black placeholder:text-stone-600 focus:outline focus:outline-white lg:h-6 lg:w-42 lg:text-base 2xl:h-10 2xl:w-84 2xl:rounded-xl 2xl:text-2xl 2xl:focus:outline-3"
        />
      </div>

      <button className="button-icon block sm:hidden">
        <img src={searchWh} alt="Поиск" className="size-4" />
      </button>
    </div>
  );
}
