import { createSlice } from '@reduxjs/toolkit';

interface Product {
    name: string;
    price: number;
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items:[] as Product[],
        totalPrice: 0
    },
    reducers: {
        addItems: (state,action) => {
            const newItems =action.payload;
            console.log('gia tri cuuu moi', )
            // console.log('gia tri  cap nhatttt moi', action.payload),
                state.totalPrice=0;
            console.log('tonggg ',state.totalPrice);
            state.items.push(
                newItems
            )
        },
    }

});

export const { addItems } = cartSlice.actions;

export const cartReducer =  cartSlice.reducer;
