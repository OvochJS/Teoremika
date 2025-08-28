import MarkdownIt from "markdown-it";
import { useDispatch } from "react-redux";
import { setChapters } from "$/store/reducers/navSectionSlice";
import { useAppSelector } from "$/hooks";

const md = new MarkdownIt({ html: false });

export function Book() {
  const {date, content: markdown, fileName: title} = useAppSelector((state) => state.Book.value);
  const dispatch = useDispatch();

  const formatedDate = new Date(date);

  const text = md.render(markdown);
  const regexp = /<h([1-6])>(.*?)<\/h\1>/g;
  let i = 0;
  const chapters: string[] = [];

  const document = text.replace(regexp, (_, level, text: string) => {
    chapters.push(text);
    return `<h${level} id="chapter-${i++}">${text}</h${level}>`;
  });

  dispatch(setChapters(chapters));

  return (
    <div className="w-[100%] bg-neutral-900 p-6 sm:w-[80%] sm:flex-8 lg:w-[65%] 2xl:max-w-7xl">
      <h1 className="mb-6 text-5xl font-extrabold">{title}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: document }}
        className="markdown wrap-break-word"
      ></div>

      <div className="my-5 text-right">Дата обновления: {formatedDate.toISOString()}</div>
    </div>
  );
}
