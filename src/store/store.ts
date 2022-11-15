import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { appReducer } from "./appReducer";

const rootReducer = combineReducers({
  app: appReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
