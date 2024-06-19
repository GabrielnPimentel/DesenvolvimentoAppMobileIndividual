import React, { useState } from "react";
import { Alert, FlatList, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { ButtonComponents } from "../../components/ButtonComponents";
import { useNavigation } from "@react-navigation/native";

export function Profile() {

  const profileOptions = [
    { id: '1', title: 'Atividade dos amigos' },
    { id: '2', title: 'Amigos' },
    { id: '3', title: 'Grupos' },
    { id: '4', title: 'Capturas de tela e vídeos' },
    { id: '5', title: 'Insígnias' },
    { id: '6', title: 'Inventário' },
    { id: '7', title: 'Detalhe da conta' },
    { id: '8', title: 'Trocar conta' },
    { id: '9', title: 'Finalizar sessão' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item}>
      <Text style={styles.title}>{item.title}</Text>
    </TouchableOpacity>
  );

  const navegando = useNavigation()

  const addFriend = () => {
    Alert.alert("Amigo adicionado");
  };

  const handleLogout = () => {
    navegando.navigate("StackLogin", {name: "Login"})
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página Profile</Text>

      <ButtonComponents title="Adicionar amigos" funcao={addFriend} />

      <FlatList
        data={profileOptions}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />


    </View>
  );
}
