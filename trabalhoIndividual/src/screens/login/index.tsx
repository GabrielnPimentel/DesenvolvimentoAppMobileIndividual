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
import { useNavigation } from "@react-navigation/native";

export function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navegando = useNavigation();

  const handleEmail = (value: string) => {
    setEmail(value);
    console.log("Valor do email: " + value);
  };

  const handlePassword = (value: string) => {
    setPassword(value);
    console.log("Valor da senha: ", value);
  };

  const handleLogin = () => {
    //Precisei colocar !email devido a um problema que deu dps no Android Studio que apagava o campo
    if (!email) {
      navegando.navigate("StackTabsPages", { name: "Login" });
    } else {
      Alert.alert("Credenciais invalidas!");
    }
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
          tipoDoInput={true}
        />

        <ButtonComponents title="Iniciar sessão" funcao={handleLogin} />

        <Text>Precisa de ajuda para iniciar a sessão</Text>

        <Text>
          É gratuito e fácil. Descubra milhares de jogos de computador para
          jogar com milhões de novos amigos.
        </Text>

        <Text style={styles.bottom}>Saiba mais sobre o Steam</Text>

      </View>
    </TouchableWithoutFeedback>
  );
}
