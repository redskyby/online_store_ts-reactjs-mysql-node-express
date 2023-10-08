import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface Type_Brand {
    id: number,
    name: string
}

interface Device {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string
}

const initialState = {
    types: [] as { id: number, name: string }[],
    brands: [] as { id: number, name: string }[],
    devices: [] as { id: number, name: string, price: number, rating: number, img: string }[],
    selectedType: {
        id: -1,
        name : ''
    },
    selectedBrands: {
        id: -1,
        name : ''
    }
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        SET_TYPES: (state, action: PayloadAction<Type_Brand[]>) => {
            // state.types.push(action.payload);
            state.types = [...action.payload];
        },
        SET_BRANDS: (state, action: PayloadAction<Type_Brand[]>) => {
            state.brands = [...action.payload];
        },
        SET_DEVICES: (state, action: PayloadAction<Device[]>) => {
            state.devices = [...action.payload];
        },
        SET_SELECTED_TYPE: (state, action: PayloadAction<Type_Brand>) => {
            state.selectedType = action.payload;
        },
        SET_SELECTED_BRAND: (state, action: PayloadAction<Type_Brand>) => {
            state.selectedBrands = action.payload;
        }
    }
})

export default deviceSlice.reducer;
export const {
    SET_TYPES,
    SET_BRANDS,
    SET_DEVICES,
    SET_SELECTED_TYPE,
    SET_SELECTED_BRAND
} = deviceSlice.actions;