import { AnyAction, ThunkAction } from "@reduxjs/toolkit";
import { store } from "./store";

export type AppStoreType = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppStoreType,
  unknown,
  AnyAction
>;
