import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { FlashList } from '@shopify/flash-list';
import ProductItem from '../components/ProductItem';
import { fetchProducts } from '../utils/api';

export default function HomeScreen({ navigation }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  function handlePress(id) {
    navigation.navigate('Detail', { id });
  }

  return (
    <FlashList
      data={products}
      estimatedItemSize={120}
      keyExtractor={item => String(item.id)}
      renderItem={({ item }) => (
        <ProductItem item={item} onPress={handlePress} />
      )}
    />
  );
}