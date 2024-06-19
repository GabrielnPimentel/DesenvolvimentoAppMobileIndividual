import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#171d25',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },

    title: {
        fontSize: 35,
        color: '#fff',
    },

    //Passar dois abaixos para componente ButtonComponents
    button: {
        backgroundColor: '#66c0f4',
        width: '90%',
        height: 60,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },

    textButton: {
        fontSize: 24,
        color: '#fff'
    },

})