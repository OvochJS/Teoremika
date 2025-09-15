import { ProblemsItem } from "#/ProblemsItem";

interface ProblemsProps {
  title: string;
  description: string;
  level: number;
  topics: string[];
}

export function ProblemsSolution(props: ProblemsProps) {
  props = {
    title: "Окак",
    level: 2,
    description: "Ничего себе",
    topics: ["Геометрия", "Тригонометрия"],
  };

  return (
    <div className="min-h-172 flex justify-center bg-neutral-900">
      <div className="lg:w-5xl 2xl:w-384 2xl:px-25 space-y-10 px-2 py-5 lg:px-12">
        <div className="space-y-2 rounded-xl border-2 border-neutral-600 p-2 text-neutral-300">
          <h3 className="text-xl font-bold">Информация о системе задач:</h3>
          <p>
            В системе представлены задачи пяти уровней сложности: от 1 (самой
            простой) до 5 (самый сложной). Количество очков, которое можно
            получить за правильное решение задачи, зависит от её уровня
            сложности и рассчитывается по формуле: Очки за задачу = n² * n +
            5,где n — уровень задачи. Например, за задачу 5 уровня максимально
            можно получить 130 очков.
          </p>
        </div>

        <ProblemsItem {...props} />
        <div className="mt-5">
          <span className="mr-2 text-xl">Ваш ответ:</span>
          <input
            placeholder="введите ответ"
            className="border-1 w-42 mb-2 rounded-sm bg-neutral-800 px-2 py-1 text-sm text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
        </div>
        <button className="border-1 block rounded-sm bg-neutral-800 px-2 py-1 text-xl text-green-700 hover:text-green-500">
          Отправить ответ
        </button>
      </div>
    </div>
  );
}
