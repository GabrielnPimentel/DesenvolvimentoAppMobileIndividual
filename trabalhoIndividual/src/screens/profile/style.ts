import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#171d25',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },

    profileContainer:{
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#2c2c34',
        padding: 25,
        marginBottom: 20
    },

    profileName:{
        fontSize:30
    },

    title: {
        fontSize: 35,
        color: '#fff',
    },

    item: {
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
      }
})