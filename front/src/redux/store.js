import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { heroesAPI } from "./heroesAPI";

const store = configureStore({
  reducer: {
    [heroesAPI.reducerPath]: heroesAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(heroesAPI.middleware),
});

setupListeners(store.dispatch);

export default store;
