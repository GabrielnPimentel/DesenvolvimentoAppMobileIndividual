import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";

export function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Home</Text>
    </View>
  );
}
