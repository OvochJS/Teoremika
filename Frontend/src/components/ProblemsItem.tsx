import type { Problem } from "$/services/problemsService";

export function ProblemsItem({ title, description, level, topics }: Problem) {
  let levelStyle;
  switch (level) {
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

  return (
    <div className="block my-2 rounded-sm bg-neutral-800 p-4">
      <h3 className="text-base font-bold">
        <span className={levelStyle + " mr-2 py-1 px-2 text-xs bg-black border rounded-2xl"}>{level + " ур"}</span>
        {title}
      </h3>

      <p className="text-sm my-5">{description}</p>
      <div className="space-x-1">{...topics.map((topic, id) => <div className="bg-neutral-900 rounded-2xl inline-block py-1 px-2 text-xs text-neutral-500"  key={id}>{topic.title}</div>)}</div>
    </div>
  );
}
