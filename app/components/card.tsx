import { StyleSheet, View } from "react-native";
import React from "react";

export default function Card({ children }) {
  return <View style={styles.body}>{children}</View>;
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    flex: 1,
    padding: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
});