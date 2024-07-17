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
      providesTags: ["product"],
    }),
    getSingleProduct: builder.query({
      query: (id) => {
        console.log(id);
        return {
          url: `/product/single/${id}`,
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    PlaceOrder: builder.mutation({
      query: (data) => {
        return {
          url: `/product/payment`,
          method: "PATCH",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),

    updateSingleProduct: builder.mutation({
      query: ({ data, id }) => {
        console.log(id, "productApi");
        return {
          url: `/product/update/${id}`,
          method: "PUT",
          body: data,
        };
      },
      invalidatesTags: ["product"],
    }),
  }),
});
export const {
  useGetAllproductsQuery,
  useGetSingleProductQuery,
  usePlaceOrderMutation,
  useUpdateSingleProductMutation,
} = productApi;
