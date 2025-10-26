import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import MainScreen from './components/MainScreen'; 
// Komponen utama akan kita buat
export default function App() {
  return (
    <Provider store={store}>
      <MainScreen />
    </Provider>
  );
}
