import {combineReducers, configureStore} from "@reduxjs/toolkit";
import isAuth from "./slice/isAuthSlice";
import device from "./slice/deviceSlice";
import pagination from "./slice/paginationSlice";

const rootReducer = combineReducers({
    isAuthToolkit: isAuth,
    isDeviceToolkit: device,
    isPaginationToolkit: pagination
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>