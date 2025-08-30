import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MarkdownFile {
  name: string;
  content: string;
  date: string | null;
}

export interface Section {
  id: number;
  title: string;
  idMarkdownFile: number | null;
  children: Section[];
}

export const apiDocumentation = createApi({
  reducerPath: "apiDocumentation",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/documentation" }),
  endpoints: (builder) => ({
    getMarkdown: builder.query<MarkdownFile, string>({
      query: (fileName: string) => `/md/${fileName}`,
    }),
    getSections: builder.query<Section[], string>({
      query: () => "/sections",
    }),
    searchSection: builder.query<Section[], string>({
      query: (keyword: string) => ({
        url: "/search",
        params: {
          keyword: keyword,
        },
      }),
    }),
  }),
});
