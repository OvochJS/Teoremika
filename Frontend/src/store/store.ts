import { configureStore } from "@reduxjs/toolkit";
import navSectionReducer from "$/store/reducers/navSectionSlice";
import problemReducer from "$/store/reducers/problemSlice";
import userReducer from "$/store/reducers/userSlice";
import { problemsApi } from "$/services/problemsService";
import { apiDocumentation } from "$/services/documentationService";
import { apiUser } from "$/services/userEntityService";

export const store = configureStore({
  reducer: {
    navSection: navSectionReducer,
    problem: problemReducer,
    user: userReducer,
    [apiDocumentation.reducerPath]: apiDocumentation.reducer,
    [apiUser.reducerPath]: apiUser.reducer,
    [problemsApi.reducerPath]: problemsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiDocumentation.middleware,apiUser.middleware,problemsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
