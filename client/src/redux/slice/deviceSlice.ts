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
    types: [
        {id: 1, name: 'Холодильники'},
        {id: 2, name: 'Смартфоны'}
    ],
    brands: [
        {id: 1, name: 'Samsung'},
        {id: 2, name: 'Apple'},
        {id: 3, name: 'Lenovo'},
        {id: 4, name: 'Asus'},
    ],
    devices: [
        {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: "img"},
        {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: "img"},
    ],
    selectedType: {
        id : -1
    },
    selectedBrands: {
        id : -1
    }
}

const deviceSlice = createSlice({
    name: 'device',
    initialState,
    reducers: {
        SET_TYPES: (state, action: PayloadAction<Type_Brand>) => {
            state.types.push(action.payload);
        },
        SET_BRANDS: (state, action: PayloadAction<Type_Brand>) => {
            state.brands.push(action.payload);
        },
        SET_DEVICES: (state, action: PayloadAction<Device>) => {
            state.devices.push(action.payload);
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