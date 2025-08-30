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
import { useEffect, useMemo } from "react";

const errorData: MarkdownFile = {
  date: null,
  content: errorMd,
  name: "Ошибка",
};

const helloData: MarkdownFile = {
  date: null,
  content: helloMd,
  name: "Добро пожаловать",
};

const loadData: MarkdownFile = {
  date: null,
  content: "",
  name: "Загрузка...",
};

const md = new MarkdownIt({ html: false });

export function Book() {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const {
    data = helloData,
    error,
    isLoading,
  } = apiDocumentation.useGetMarkdownQuery(id ?? skipToken);
  let finalData;

  if (isLoading) {
    finalData = loadData;
  } else if (error) {
    let content = errorData.content;
    if (isNaN(Number(id))) {
      content =
        (id === "null"
          ? "### У секции нету, Привязаного Markdown файла\n"
          : "### Id не являеться числом\n") + content;
    } else if ("status" in error) {
      content = `### Код ошибки: ${error.status}\n` + content;
    }

    finalData = { ...errorData, content };
  } else {
    finalData = data;
  }
  const { date, content: markdown, name } = finalData;

  let formatedDate = "";
  if (date) {
    const formater = new Intl.DateTimeFormat("ru");
    formatedDate = formater.format(new Date(date));
  }

  const text = md.render(markdown);

  const { chapters, document } = useMemo(() => {
    const regexp = /<h([1-6])>(.*?)<\/h\1>/g;
    let i = 0;
    const collected: string[] = [];

    const document = text.replace(regexp, (_, level, txt: string) => {
      collected.push(txt);
      return `<h${level} id="chapter-${i++}">${txt}</h${level}>`;
    });

    return { chapters: collected, document };
  }, [text]);

  useEffect(() => {
    dispatch(setChapters(chapters));
  }, [dispatch, chapters]);

  return (
    <div className="min-h-200 sm:flex-8 w-[100%] bg-neutral-900 p-6 sm:w-[80%] lg:w-[65%] 2xl:max-w-7xl">
      <h1 className="mb-6 text-5xl font-extrabold">{name}</h1>
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
