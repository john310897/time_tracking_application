import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./taskReducer";
export const store = configureStore({
    reducer: {
        task: taskReducer
    },
})
export default store