import React, { useState } from "react";
import { Alert, Text, View } from "react-native";
import { styles } from "./style";
import { ButtonComponents } from "../../components/ButtonComponents";

export function Profile() {
  const addFriend = () => {
    Alert.alert("Amigo adicionado");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Profile</Text>

      <ButtonComponents title="Adicionar amigos" funcao={addFriend} />
    </View>
  );
}
