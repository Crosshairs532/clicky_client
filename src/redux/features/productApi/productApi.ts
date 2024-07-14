import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: (selector) => {
        const param = new URLSearchParams();
        if (selector) {
          console.log(selector);
          param.append("selector", selector);
        }
        return {
          url: "/product",
          method: "GET",
          params: param,
        };
      },
    }),
  }),
});
export const { useGetAllproductsQuery } = productApi;
