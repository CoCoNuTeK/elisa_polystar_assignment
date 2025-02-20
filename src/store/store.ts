import { configureStore } from "@reduxjs/toolkit";
import userReducer from "@/store/slices/userSlice";

export const store = configureStore({
  reducer: {
    users: userReducer, // Register user slice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
