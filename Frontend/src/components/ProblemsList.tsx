import { Problems } from "./ProblemsItem";

const data = [
  {
    title: "Окак",
    level: 5,
    description: "Ничего себе",
    topics: ["Геометрия", "Тригонометрия"],
  },
  {
    title: "вот это да",
    level: 1,
    description: "Ничего себе",
    topics: ["Геометрия", "Тригонометрия"],
  },
  {
    title: "Окак",
    level: 3,
    description: "Ничего себе",
    topics: ["Геометрия", "Тригонометрия"],
  },
    {
    title: "Окак",
    level: 2,
    description: "Ничего себе",
    topics: ["Геометрия", "Тригонометрия"],
  },
    {
    title: "Окак",
    level: 4,
    description: "Ничего себе",
    topics: ["Геометрия", "Тригонометрия"],
  },
];

export function ProblemsList() {
  return (
    <div className="lg:w-[75%] lg:max-w-99999 w-full max-w-162 mx-auto">
      <h1 className="text-2xl font-bold">Найдено 1488 задач</h1>
      {data.map((props, id) => (
        <Problems key={id} {...props} />
      ))}
    </div>
  );
}
