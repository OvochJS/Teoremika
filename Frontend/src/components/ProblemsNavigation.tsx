export function ProblemsNavigation() {
  return (
    <div className="w-full max-w-100 mx-auto mb-3 lg:w-[20%] h-fit rounded-2xl border-2 border-neutral-500 p-4 text-neutral-500">
      <h3 className="text-xl text-white">Поиск Задач</h3>

      <form className="my-3 space-y-4">
        <div className="relative after:absolute after:right-3 after:top-1 after:size-5 after:bg-[url(@/search.svg)] after:bg-cover">
          <input
            className="text-neutral-500 border-1 block w-full rounded-sm bg-neutral-800 px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-400"
            type="text"
            placeholder="Поиск"
          />
        </div>

        <span className="text-sm text-neutral-600">Тема:</span>
        <select  className="border-1 block w-full rounded-sm bg-neutral-800 px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-400">
          <option value="" disabled selected >
            Выберите тему
          </option>
          <option>Геометрия</option>
          <option>Тригонометрия</option>
          <option>ого</option>
        </select>

        <span className="text-sm text-neutral-600">Уровень:</span>
        <select className="border-1 block w-full rounded-sm bg-neutral-800 px-2 py-0.5 focus:outline-none focus:ring-2 focus:ring-neutral-400">
          <option value="" disabled selected>
            Выберите уровень
          </option>
          <option>1 уровень</option>
          <option>2 уровень</option>
          <option>3 уровень</option>
          <option>4 уровень</option>
          <option>5 уровень</option>
        </select>

        <button className="text-neutral-400 text-xl border-1 block w-full rounded-sm bg-neutral-800 px-2 py-1 focus:outline-none hover:bg-neutral-700">Поиск</button>
      </form>
    </div>
  );
}
