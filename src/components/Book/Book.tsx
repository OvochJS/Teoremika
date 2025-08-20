import MarkdownIt from "markdown-it";

import Markdown from "./test.md?raw";

const md = new MarkdownIt({ html: false });

export function Book({
  title = "Тестовый Заголовок",
  date,
}: {
  title: string;
  date: string;
}) {
  const text = md.render(Markdown);

  return (
    <div className="bg-neutral-900 p-6 max-w-5xl flex-3">
      <h1 className="mb-6 text-2xl font-extrabold">{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className={"markdown"}
      ></div>

      <span>{date}</span>
    </div>
  );
}
