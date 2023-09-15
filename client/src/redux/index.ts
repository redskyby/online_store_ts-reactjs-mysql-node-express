import {combineReducers, configureStore} from "@reduxjs/toolkit";
import isAuth from "./slice/isAuthSlice";
import device from "./slice/deviceSlice";

const rootReducer = combineReducers({
    isAuthToolkit : isAuth,
    isDeviceToolkit : device
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>