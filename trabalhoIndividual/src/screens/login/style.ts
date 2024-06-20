import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#2c2c34',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 20,
    },

    title: {
        fontSize: 35,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
        marginTop:40
    },

    textHelp:{
        fontSize: 16,
        color: '#fff',
        textDecorationLine: 'underline'
    },

    textInfo:{
        fontSize: 16,
        paddingHorizontal: 20,
        marginTop: 50
    },

    bottom:{
        position: 'absolute',
        bottom:0,
    }

})