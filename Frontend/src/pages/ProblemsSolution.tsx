import { useAppDispatch, useAppSelector } from "$/hooks";
import { setScore } from "$/store/reducers/userSlice";
import MarkdownIt from "markdown-it";
import { useState } from "react";
import { useNavigate } from "react-router";

const md = new MarkdownIt({ html: false });

export function ProblemsSolution() {
  const problem = useAppSelector((state) => state.problem.value);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [value,setValue] = useState("");
  const [status,setStatus] = useState(0);

  let levelStyle;
  switch (problem.level) {
    case 1:
      levelStyle = "text-white border-white";
      break;

    case 2:
      levelStyle = "text-green-600 border-green-600";
      break;

    case 3:
      levelStyle = "text-blue-600 border-blue-600";
      break;

    case 4:
      levelStyle = "text-purple-600 border-purple-600";
      break;

    case 5:
      levelStyle = "text-red-600 border-red-600";
      break;
  }

let statusStyle;
let statusText;
   switch (status) {
    case 0:
      statusText = "Введите ответ";
      statusStyle = "text-white";
      break;
          case 1:
      statusText = "Верный ответ";
      statusStyle = "text-green-600 text-xl";
      break;
          case 2:
      statusText = "Неверный ответ";
      statusStyle = "text-red-600 text-xl";
      break;
   }

  function handleClick() {
    if(+value == problem.solution) {
      dispatch(setScore(+value));
      setStatus(1);
      setTimeout(() => navigate("/"),1000)
      return;
    }
    setStatus(2);
  }

  const text = md.render(problem.markdown);

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

        <div className="my-2 block rounded-sm bg-neutral-800 p-4">
          <h3 className="text-base font-bold">
            <span
              className={
                levelStyle +
                " mr-2 rounded-2xl border bg-black px-2 py-1 text-xs"
              }
            >
              {problem.level + " ур"}
            </span>
            {problem.title}
          </h3>

          <div
            dangerouslySetInnerHTML={{ __html: text }}
            className="my-2 ml-2  markdown wrap-break-word"
          ></div>

          <div className="space-x-1">
            {...problem.topics.map((topic, id) => (
              <div
                className="inline-block rounded-2xl bg-neutral-900 px-2 py-1 text-xs text-neutral-500"
                key={id}
              >
                {topic.title}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <span className="mr-2 text-xl">Ваш ответ:</span>
          <input
            type="number"
            placeholder="введите ответ"
            value = {value}
            onChange={(e) => setValue(e.target.value)}
            className="border-1 w-42 mb-2 rounded-sm bg-neutral-800 px-2 py-1 text-sm text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
        </div>
        <span className={statusStyle}>{statusText}</span>
        <button onClick={() => handleClick()} className="border-1 block rounded-sm bg-neutral-800 px-2 py-1 text-xl text-green-700 hover:text-green-500">
          Отправить ответ
        </button>
      </div>
    </div>
  );
}
