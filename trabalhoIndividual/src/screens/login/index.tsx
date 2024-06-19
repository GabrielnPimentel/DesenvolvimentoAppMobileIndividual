import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { TextInputComponent } from "../../components/TextInput";
import { ButtonComponents } from "../../components/ButtonComponents";
import { styles } from "./style";

export function Login() {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmail = (value: string) => {
    setEmail(value);
    console.log("Valor do email: ", value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
    console.log("Valor da senha: ", value);
  };

  const handleLogin = () => {
    Alert.alert("Botão Clicado!");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>

        <Text style={styles.title}>INICIAR SESSÃO</Text>

        <Text>NOME DE USUARIO STEAM</Text>

        <TextInputComponent
          funcao={handleEmail}
          value={email}
          //placeholder="Digite seu email"
        />

        <Text>SENHA</Text>

        <TextInputComponent
          funcao={handlePassword}
          value={password}
          //placeholder="Digite seu senha"
          tipoDoInput={true}
        />

        <ButtonComponents title='Iniciar sessão' funcao={handleLogin}/>

      </View>
    </TouchableWithoutFeedback>
  );
}
