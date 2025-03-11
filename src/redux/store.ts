import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";
import promptsReducer from "./promptsSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    prompts: promptsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
