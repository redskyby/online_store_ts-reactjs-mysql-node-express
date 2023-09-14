import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    user: {}
}

const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        IS_SET_AUTH: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        IS_SET_USER: (state, action: PayloadAction<object>) => {
            state.user = action.payload;
        },
        GET_IS_AUTH: (state) => {
            state.isAuth;
        },
        GET_USER: (state) => {
            state.user;
        }
    }
})

export default isAuthSlice.reducer;
export const {
    IS_SET_AUTH,
    IS_SET_USER,
    GET_IS_AUTH,
    GET_USER
} = isAuthSlice.actions;