import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    isAuth: true,
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
        }
    }
})

export default isAuthSlice.reducer;
export const {
    IS_SET_AUTH,
    IS_SET_USER
} = isAuthSlice.actions;