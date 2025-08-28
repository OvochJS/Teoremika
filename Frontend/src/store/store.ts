import { configureStore } from "@reduxjs/toolkit";
import navSectionReducer from "$/store/reducers/navSectionSlice";
import BookReducer from "$/store/reducers/BookSlice"

export const store = configureStore({
  reducer: {
    navSection: navSectionReducer,
    Book: BookReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
