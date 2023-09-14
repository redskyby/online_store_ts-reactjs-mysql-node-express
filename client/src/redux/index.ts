import {combineReducers, configureStore} from "@reduxjs/toolkit";
import isAuth from "./slice/isAuthSlice";

const rootReducer = combineReducers({
    isAuthToolkit : isAuth
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof rootReducer>