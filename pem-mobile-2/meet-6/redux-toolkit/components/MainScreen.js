import React from 'react';
import { View, Text, ScrollView, Button, StyleSheet } from 'react-native';
import { PRODUCTS } from '../data';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart, clearCart } from '../redux/cartSlice';


const ProductItem = ({ product }) => {
  const dispatch = useDispatch();


  return (
    <View style={styles.productContainer}>
      <Text style={styles.productName}>{product.name}</Text>
      <Text>Rp {product.price.toLocaleString('id')}</Text>
      <Button
        title="➕ Tambah ke Keranjang"
        onPress={() => dispatch(addToCart(product))}
      />
    </View>
  );
};


const CartSummary = () => {
  // Mengambil state dari Redux Store
  const cartItems = useSelector(state => state.cart.items);
  const totalQuantity = useSelector(state => state.cart.totalQuantity);
  const dispatch = useDispatch();


  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );


  return (
    <View style={styles.cartContainer}>
      <Text style={styles.header}>Keranjang Belanja ({totalQuantity})</Text>
      {cartItems.map((item) => (
        <View key={item.id} style={styles.cartItem}>
          <Text>{item.name} x {item.quantity}</Text>
          <Button
            title="❌ Hapus Item"
            onPress={() => dispatch(removeFromCart(item))}
            color="red"
          />
        </View>
      ))}
      <Text style={styles.totalText}>Total: Rp {total.toLocaleString('id')}</Text>
      <Button
        title="Bersihkan Keranjang"
        onPress={() => dispatch(clearCart())}
        disabled={totalQuantity === 0}
      />
    </View>
  );
};


export default function MainScreen() {
  return (
    <ScrollView style={styles.screen}>
      <Text style={styles.header}>Daftar Produk</Text>
      {PRODUCTS.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
     
      <View style={styles.separator} />
     
      <CartSummary />
      <View style={{ height: 50 }} />
    </ScrollView>
  );
}


// Styling (Opsional, untuk tampilan)
const styles = StyleSheet.create({
  screen: { flex: 1, paddingTop: 50, paddingHorizontal: 15, backgroundColor: '#f0f0f0' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  separator: { height: 1, backgroundColor: '#ccc', marginVertical: 20 },
  productContainer: { backgroundColor: '#fff', padding: 15, marginBottom: 10, borderRadius: 8, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  productName: { fontWeight: 'bold', width: '35%' },
  cartContainer: { marginTop: 20, padding: 15, backgroundColor: '#fff', borderRadius: 8, borderWidth: 1, borderColor: '#ddd' },
  cartItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 5, borderBottomWidth: 1, borderBottomColor: '#eee' },
  totalText: { fontSize: 18, fontWeight: 'bold', marginVertical: 10, color: 'green' }
});
