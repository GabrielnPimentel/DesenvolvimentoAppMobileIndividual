import React from "react";
import { Text, TouchableOpacity } from "react-native";
import {styles} from './style';

type PropsButton = {
  title: string;
  funcao: () => void;
}

export function ButtonComponents({title, funcao}: PropsButton) {
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={funcao} >
        <Text style={styles.textButton}>
          {title}
        </Text>
      </TouchableOpacity>
    </>
  );
}
