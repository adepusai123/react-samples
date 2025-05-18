import { configureStore } from "@reduxjs/toolkit";
import drawerReducer from "./drawerSlice";
import promptsReducer from "./promptsSlice";
import studioReducer from "./studioSlice";

export const store = configureStore({
  reducer: {
    drawer: drawerReducer,
    prompts: promptsReducer,
    studio: studioReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
