import MarkdownIt from "markdown-it";
import Markdown from "./test.md?raw";
import { useDispatch } from "react-redux";
import { setChapters } from "#/NavSection/navSectionSlice";

const md = new MarkdownIt({ html: false });

export function Book({
  title = "Тестовый Заголовок",
  date,
}: {
  title: string;
  date: string;
}) {
  const dispatch = useDispatch();

  const text = md.render(Markdown);
  const regexp = /<h([1-6])>(.*?)<\/h\1>/g;
  let i = 0;
  const chapters: string[] = [];

  const document = text.replace(regexp, (full, level, text: string) => {
    chapters.push(text);
    return `<h${level} id="chapter-${i++}">${text}</h${level}>`;
  });

  dispatch(setChapters(chapters));

  return (
    <div className="max-w-5xl flex-6 bg-neutral-900 p-6">
      <h1 className="mb-6 text-2xl font-extrabold">{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: document }}
        className={"markdown"}
      ></div>

      <span>{date}</span>
    </div>
  );
}
