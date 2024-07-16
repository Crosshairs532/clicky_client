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
    PlaceOrder: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: `/product/payment`,
          method: "PATCH",
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
} = productApi;
