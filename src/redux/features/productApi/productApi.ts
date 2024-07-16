import { baseApi } from "../../api/baseApi";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllproducts: builder.query({
      query: (selector) => {
        const param = new URLSearchParams();
        if (selector) {
          param.append("selector", JSON.stringify(selector));
        }
        return {
          url: "/product",
          method: "GET",
          params: param,
        };
      },
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/product/single/${id}`,
          method: "GET",
        };
      },
    }),
    updateSingleProduct: builder.mutation({
      query: ({ data, id }) => {
        return {
          url: `/product/single/${id}`,
          method: "PATCH",
          data: data,
        };
      },
    }),
  }),
});
export const {
  useGetAllproductsQuery,
  useGetSingleProductQuery,
  useUpdateSingleProductMutation,
} = productApi;
