import React, { useEffect, useState } from "react";
import {View,Text,TextInput,ActivityIndicator,StyleSheet,Pressable,} from "react-native";
import { FlashList } from "@shopify/flash-list";
import ProductItem from "../components/ProductItem";
import { fetchProducts } from "../utils/api";

export default function HomeScreen({ navigation }) {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);

  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [sort, setSort] = useState("asc");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  

  useEffect(() => {
    fetchProducts()
      .then((res) => {
        setProducts(res);
        setFiltered(res);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);


  useEffect(() => {
    let result = [...products];

    if (search) {
      result = result.filter((p) =>
        p.title.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoryFilter) {
      result = result.filter((p) => p.category === categoryFilter);
    }

    result.sort((a, b) => {
      if (sort === "asc") return a.title.localeCompare(b.title);
      return b.title.localeCompare(a.title);
    });

    setFiltered(result);
  }, [search, sort, categoryFilter, products]);

  function handlePress(id) {
    navigation.navigate("Detail", { id });
  }

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

  if (filtered.length === 0) {
    return (
      <View style={styles.center}>
        <Text>No results found.</Text>
          <Pressable style={styles.button} onPress={() => setSearch("")}>
        <Text>Clear Search</Text>
      </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search product..."
        value={search}
        onChangeText={setSearch}
      />

      <View style={styles.row}>
        <Pressable
          style={styles.button}
          onPress={() => setSort(sort === "asc" ? "desc" : "asc")}
        >
          <Text>Sort: {sort === "asc" ? "A → Z" : "Z → A"}</Text>
        </Pressable>

        <Pressable
          style={styles.button}
          onPress={() =>
            setCategoryFilter(categoryFilter === "electronics" ? "" : "electronics")
          }
        >
          <Text>
            Category: {categoryFilter === "electronics" ? "Electronics ✅" : "All"}
          </Text>
        </Pressable>
      </View>

      <FlashList
        data={filtered}
        estimatedItemSize={120}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductItem item={item} onPress={handlePress} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 12 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 8,
    marginBottom: 10,
    borderRadius: 6,
  },
  button: {
    borderWidth: 1,
    borderColor: "#aaa",
    padding: 8,
    borderRadius: 6,
    marginRight: 8,
  },
  row: {
    flexDirection: "row",
    marginBottom: 10,
  },
  error: { color: "red", fontSize: 16 },
});