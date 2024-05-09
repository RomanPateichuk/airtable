import { configureStore } from '@reduxjs/toolkit';
import {api} from "./api.ts";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(api.middleware)
});