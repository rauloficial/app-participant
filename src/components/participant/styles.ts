import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: "100%",
        backgroundColor: '#1F1E25',
        borderRadius: 5,
        marginBottom: 10,
    },
    title: {
        marginLeft: 16,
        flex: 1,
        fontSize: 16,
        color: "#FDFCFE",
        fontWeight: 'bold'
    },
    titleButton: {
        color: "#FDFCFE",
        fontSize: 21,
        fontWeight: 'bold'
    },
    button: {
        width: 59,
        height: 59,
        backgroundColor: "#ff0000",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
})