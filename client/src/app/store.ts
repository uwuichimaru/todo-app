import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import auth from '../features/auth/authSlice'
import task from '../features/tasks/tasksSlice'
import { listenerMiddleware as listenerLoginMiddleware } from "../middleware/login";
import { listenerMiddleware as listenerRegisterMiddleware } from "../middleware/register";
import { api } from "./services/api";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth,
    task
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
      .prepend(listenerLoginMiddleware.middleware)
      .prepend(listenerRegisterMiddleware.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
