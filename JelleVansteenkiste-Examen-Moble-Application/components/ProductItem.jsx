import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductItem({ item, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={() => onPress(item.id)}>
      <Image source={{ uri: item.image }} style={styles.image} resizeMode="contain" />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>€ {item.price}</Text>
        <Text style={styles.category}>{item.category}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderColor: '#eee', alignItems: 'center' },
  image: { width: 70, height: 70, marginRight: 10 },
  info: { flex: 1 },
  title: { fontWeight: '600' },
  price: { marginTop: 4 },
  category: { marginTop: 6, fontSize: 12, color: '#666' },
});