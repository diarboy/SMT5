import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice'; // Akan kita buat di langkah berikutnya


export const store = configureStore({
  reducer: {
    cart: cartReducer, // Tambahkan reducer untuk keranjang
    // Anda bisa menambahkan reducer lain seperti 'products' atau 'auth' di sini
  },
});