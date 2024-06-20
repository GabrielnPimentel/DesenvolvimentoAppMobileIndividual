import React from "react";
import { TextInput } from "react-native";
import {styles} from './style'

type PropsComponent = {
  placeholder?: string;
  value: string;
  funcao: (value: string) => void;
  tipoDoInput?: boolean;
}

export function TextInputComponent({placeholder, value, funcao, tipoDoInput}: PropsComponent) {
  return (
    <TextInput
      onChangeText={funcao}
      
      value={value}
      style={styles.styleInput}
      placeholder={placeholder}
      secureTextEntry={tipoDoInput}
    />
  );
}
