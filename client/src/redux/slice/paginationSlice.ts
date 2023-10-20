import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    page: 1 as number,
    totalCount: 0 as number,
    limit: 3 as number,
}

const paginationSlice = createSlice({
    name: 'pagination',
    initialState,
    reducers: {
        SET_PAGINATION_PAGE: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
        SET_PAGINATION_TOTAL_COUNT: (state, action: PayloadAction<number>) => {
            state.totalCount = action.payload;
        },
        SET_PAGINATION_LIMIT: (state, action: PayloadAction<number>) => {
            state.limit = action.payload;
        }
    }
})

export default paginationSlice.reducer;

export const {
    SET_PAGINATION_PAGE,
    SET_PAGINATION_TOTAL_COUNT,
    SET_PAGINATION_LIMIT
} = paginationSlice.actions;
