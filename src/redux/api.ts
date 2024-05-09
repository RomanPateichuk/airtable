import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {CountriesDataType, CountryDataType} from "./types.ts";


export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: "https://restcountries.com/v3.1/"}),
  tagTypes: ["Countries" , "Country"],
  endpoints: (build) => ({
    getAllData: build.query<Array<CountriesDataType>, void>({
      query: () => `/all?fields=name,capital,currencies,region,languages`,
      providesTags: (result) =>
        result
          ? [...result.map(({name}) => ({type: "Countries" as const, name})), "Countries"]
          : ["Countries"],
    }),
    getCountry: build.query<Array<CountryDataType>, any>({
      query: (name: string) => `/name/${name}`,
      providesTags: (result) =>
        result
          ? [...result.map(({name}) => ({type: "Country" as const, name})), "Country"]
          : ["Country"],
    }),
  })
})

export const {
  useGetAllDataQuery,
  useGetCountryQuery,
} = api;