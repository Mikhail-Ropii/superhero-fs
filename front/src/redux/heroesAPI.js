import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "../baseURL";

export const heroesAPI = createApi({
  reducerPath: "heroAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["hero"],

  endpoints: (builder) => ({
    addNewHero: builder.mutation({
      query: (newHero) => ({
        url: "/api/heroes",
        method: "POST",
        body: newHero,
      }),

      invalidatesTags: ["hero"],
    }),

    uploadImg: builder.mutation({
      query: (img) => ({
        url: "/api/heroes/images",
        method: "POST",
        body: img,
      }),
    }),

    getHeroById: builder.query({
      query: (id) => ({
        url: `/api/heroes/${id}`,
        method: "GET",
      }),
      providesTags: ["hero"],
    }),

    getAllHeroes: builder.query({
      query: (page) => ({
        url: "/api/heroes/",
        method: "GET",
        params: { page },
      }),
      providesTags: ["hero"],
    }),

    updateHero: builder.mutation({
      query: ({ heroObject, heroId }) => ({
        url: `/api/heroes/${heroId}`,
        method: "PUT",
        body: heroObject,
      }),
      invalidatesTags: ["hero"],
    }),

    removeHero: builder.mutation({
      query: (heroId) => ({
        url: `/api/heroes/${heroId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["hero"],
    }),
  }),
});

export const {
  useAddNewHeroMutation,
  useGetHeroByIdQuery,
  useGetAllHeroesQuery,
  useUpdateHeroMutation,
  useRemoveHeroMutation,
  useUploadImgMutation,
  useLazyGetHeroByIdQuery,
} = heroesAPI;
