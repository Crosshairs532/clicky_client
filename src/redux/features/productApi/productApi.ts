import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: () => {
        return {
          url: "/product",
          method: "GET",
        };
      },
    }),
  }),
});
export const { useGetAllproductsQuery } = productApi;
