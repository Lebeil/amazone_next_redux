import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../redux/index";

export const store = configureStore({
    reducer: {
        basket: basketReducer,
    },
});