import { configureStore } from "@reduxjs/toolkit";
import commonReducer from "@/slices/commonSlice";
import accountReducer from "@/slices/AccountSlice";
import appReducer from "@/slices/AppSlice";

const store = configureStore({
  reducer: {
    common: commonReducer,
    account: accountReducer,
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
