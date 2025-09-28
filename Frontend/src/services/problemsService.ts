import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Problem {
  id: number;
  title: string;
  description: string;
  markdown: string;
  solution: number;
  level: number;
  topics: Topic[];
}

export interface Topic {
  id: number;
  title: string;
}

export const problemsApi = createApi({
  reducerPath: "problemsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1" }),
  endpoints: (builder) => ({
    getProblems: builder.query<Problem[], void>({
      query: () => "problems",
    }),
  }),
});
