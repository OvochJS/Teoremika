import { configureStore } from "@reduxjs/toolkit";
import navSectionReducer from "$/store/reducers/navSectionSlice";
import { apiDocumentation } from "$/services/documentationService";
import { apiUser } from "$/services/userEntityService";

export const store = configureStore({
  reducer: {
    navSection: navSectionReducer,
    [apiDocumentation.reducerPath]: apiDocumentation.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiDocumentation.middleware,apiUser.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
