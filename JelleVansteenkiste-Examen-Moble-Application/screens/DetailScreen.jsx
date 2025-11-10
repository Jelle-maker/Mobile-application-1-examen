import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { fetchProductById } from '../utils/api';

export default function DetailScreen({ route }) {
  const { id } = route.params;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetchProductById(id)
      .then(setProduct)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [id]);

    if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" />
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>Error: {error}</Text>
      </View>
    );
  }

  if (!product) 
    {
      return <Text style={styles.error}>Geen product gevonden</Text>;
    }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>€ {product.price}</Text>
      <Text style={styles.category}>{product.category}</Text>

      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 16 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  image: { width: '100%', height: 260, marginBottom: 20 },
  title: { fontSize: 18, fontWeight: '600', marginBottom: 6 },
  price: { fontSize: 16, marginBottom: 10 },
  category: { fontSize: 14, color: '#666', marginBottom: 10 },
  description: { fontSize: 14 },
  error: { color: 'red', textAlign: 'center' },
});