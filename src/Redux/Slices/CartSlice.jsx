// SLICES ONLY HAVE 3 THINGS WITHIN IT.. 1ST is "NAME" , 2ND is function's "INITIAL STATE", AND 3RD IS 'REDUCER"
import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

    name: "cart",
    initialState: {
        cart: []
    },

    reducers: {
        addToCart: (state, action) => {

            const existingItem = state.cart.find((item) => item.id === action.payload.id) // jo id  cart mein push ho rhi hai

            if (existingItem) {
               state.cart = state.cart.map((item) => item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
                )
            }
            else {
                state.cart.push(action.payload);
            }
        },

        removeCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },

        incrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
            );
          },
          decrementQty: (state, action) => {
            state.cart = state.cart.map((item) =>
              item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item
            );
          },
    },
});

export const { addToCart, removeCart, incrementQty, decrementQty } = CartSlice.actions;
export default CartSlice.reducer;
