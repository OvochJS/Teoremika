import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface MarkdownFile {
  fileName: string;
  content: string;
  date: number | null;
}

export interface Section {
  id: number;
  title: string;
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
      query: () => '/sections',
    }),
  }),
});
