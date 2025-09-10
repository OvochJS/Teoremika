import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface User {
  id: number;
  username: string;
  email: string | null;
  password: string;
}
export interface RegisterReq {
  username: string;
  email: string | null;
  password: string;
}

export const apiUser = createApi({
  reducerPath: "apiUser",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/v1/user" }),
  endpoints: (builder) => ({
    register: builder.mutation<User, RegisterReq>({
        query:(body) => ({
            url: "/register",
            method: "POST",
            body,
        })
    })
  }),
});
