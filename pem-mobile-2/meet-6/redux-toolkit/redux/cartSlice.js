import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [], // Daftar produk di keranjang
  totalQuantity: 0,
};


const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Action untuk menambahkan produk ke keranjang
    addToCart: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find(item => item.id === newItem.id);


      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push({ ...newItem, quantity: 1 });
      }
      state.totalQuantity++;
    },


    // Action untuk menghapus seluruh item produk dari keranjang
    removeFromCart: (state, action) => {
      const idToRemove = action.payload.id;
      const existingItem = state.items.find(item => item.id === idToRemove);


      if (existingItem) {
        state.totalQuantity -= existingItem.quantity; // Kurangi total kuantitas
        state.items = state.items.filter(item => item.id !== idToRemove);
      }
    },
       // Action untuk mengosongkan keranjang
    clearCart: (state) => {
        state.items = [];
        state.totalQuantity = 0;
    }
  },
});
export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;