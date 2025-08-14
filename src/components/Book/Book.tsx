import MarkdownIt from "markdown-it";

import Markdown from "./test.md?raw";
import style from "./Book.module.scss";

const md = new MarkdownIt({ html: false });

export function Book({ title = "Тестовый Заголовок", date }: { title: string; date: string }) {
  const text = md.render(Markdown);

  return (
    <div className={style.content}>
      <h1 className={style.title}>{title}</h1>

      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className={"markdown " + style.markdownContent}
      ></div>

      <span>{date}</span>
    </div>
  );
}
