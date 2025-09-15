import { Link } from "react-router";
import { ProblemsItem } from "./ProblemsItem";

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
    <div className="lg:max-w-99999 max-w-162 mx-auto w-full lg:w-[75%]">
      <h1 className="text-2xl font-bold">Найдено 1488 задач</h1>
      {data.map((props, id) => (
        <Link
          to={`${props.title}`}
          className="hover:scale-102 transform transition-transform duration-200"
        >
          <ProblemsItem key={id} {...props} />
        </Link>
      ))}
    </div>
  );
}
