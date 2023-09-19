import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
const store = configureStore({
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),

    reducer: {
        firstSlice: userSlice,
    },
});

export default store;
