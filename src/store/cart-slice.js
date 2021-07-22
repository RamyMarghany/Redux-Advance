import { createSlice } from '@reduxjs/toolkit';

const toggleSlice = createSlice({
    name: 'toggleSlice',
    initialState: { showCart: false },
    reducers: {
        toggleCart: (state) => {
            state.showCart = !state.showCart;
        }
    }
});

export const { toggleCart } = toggleSlice.actions;
export default toggleSlice.reducer;