import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseFetchQuery = fetchBaseQuery({
  // baseUrl: `https://clicky-server.vercel.app/api/clicky/`,
  baseUrl: `http://localhost:2000/api/clicky/`,
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseFetchQuery,
  tagTypes: ["product"],
  endpoints: () => ({}),
});
// baseUrl: `http://localhost:2000/api/clicky/`,
// baseUrl: `https://clicky-server.vercel.app/api/clicky/`,
