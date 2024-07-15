import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BaseFetchQuery = fetchBaseQuery({
  baseUrl: "http://localhost:2000/api/clicky/",
});
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: BaseFetchQuery,
  tagTypes: ["product"],
  endpoints: () => ({}),
});
