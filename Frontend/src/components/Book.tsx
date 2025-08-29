import MarkdownIt from "markdown-it";
import { setChapters } from "$/store/reducers/navSectionSlice";
import { useAppDispatch } from "$/hooks";
import { useParams } from "react-router";
import {
  apiDocumentation,
  type MarkdownFile,
} from "$/services/documentationService";
import { skipToken } from "@reduxjs/toolkit/query";

import errorMd from "@/error.md?raw";
import helloMd from "@/hello.md?raw";

const errorData: MarkdownFile = {
  date: null,
  content: errorMd,
  fileName: "Ошибка",
};

const helloData: MarkdownFile = {
  date: null,
  content: helloMd,
  fileName: "Добро пожаловать",
};

const loadData: MarkdownFile = {
  date: null,
  content: "",
  fileName: "Загрузка...",
};

const md = new MarkdownIt({ html: false });

export function Book() {
  const { title } = useParams();
  const dispatch = useAppDispatch();
  const {
    data = helloData,
    error,
    isLoading,
  } = apiDocumentation.useGetMarkdownQuery(title ?? skipToken);
  let finalData;

  if (isLoading) {
    finalData = loadData;
  } else if (error) {
    finalData = errorData;
    if ("status" in error) {
      finalData.fileName = `Код ошибки: ${error.status}`;
    }
  } else {
    finalData = data;
  }
  const { date, content: markdown, fileName } = finalData;

  let formatedDate = "";
  if (date) {
    const formater = new Intl.DateTimeFormat("ru");
    formatedDate = formater.format(new Date(date));
  }

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
      <h1 className="mb-6 text-5xl font-extrabold">{fileName}</h1>
      <div
        dangerouslySetInnerHTML={{ __html: document }}
        className="markdown wrap-break-word"
      ></div>
      {formatedDate ? (
        <div className="my-5 text-right">Дата обновления: {formatedDate}</div>
      ) : null}
    </div>
  );
}
