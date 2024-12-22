import React from "react";
import { View, StyleSheet, TextInput, Image, Text } from "react-native";

type Props = {
  value: string;
  onChange: (s: string) => void;
};

export function SearchBar({ value, onChange }: Props) {
  return (
    <View style={styles.searchBar}>
      <Image
        source={{
          uri: "https://static-00.iconduck.com/assets.00/search-icon-2048x2048-cmujl7en.png",
        }}
        style={styles.icon}
      />
      <TextInput
        onChangeText={onChange}
        value={value}
        placeholder="Search..."
        style={styles.input}
      />
      <Text style={styles.filterText}>Filter Text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center", // Aligne les éléments verticalement au centre
    margin: 8,
//     backgroundColor: "#f5f5f5",
    borderRadius: 10,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 8,
  },
  input: {
    flex: 1, // Permet au TextInput de prendre tout l'espace disponible
    padding: 8,
    color: "#020",
    fontSize: 14,
    borderColor: "#ddd",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginHorizontal: 8,
    fontWeight: "bold",
  },
  filterText: {
    fontSize: 14,
    color: "#fff",
    marginLeft: 8,    
  },
});