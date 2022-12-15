import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../slice/count"

export default configureStore({
    reducer: countSlice,
})