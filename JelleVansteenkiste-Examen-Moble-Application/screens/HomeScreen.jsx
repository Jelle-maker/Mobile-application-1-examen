import React, { useEffect, useState } from 'react';
import { FlashList } from '@shopify/flash-list';
import ProductItem from '../components/ProductItem';
import { fetchProducts } from '../utils/api';

export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

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