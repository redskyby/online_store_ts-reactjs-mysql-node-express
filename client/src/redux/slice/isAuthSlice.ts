import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface User{
    email : string,
    role : string,
    iat : number ,
    exp : number
}

const initialState = {
    isAuth: false,
    user: {
        role: 'USER'
    } as User | null
}

const isAuthSlice = createSlice({
    name: 'isAuth',
    initialState,
    reducers: {
        IS_SET_AUTH: (state, action: PayloadAction<boolean>) => {
            state.isAuth = action.payload;
        },
        IS_SET_USER: (state, action: PayloadAction<User | null>) => {
            state.user = action.payload;
        }
    }
})

export default isAuthSlice.reducer;
export const {
    IS_SET_AUTH,
    IS_SET_USER
} = isAuthSlice.actions;