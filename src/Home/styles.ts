import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#131016',
        padding: 24
    },
    title: {
        color: "#FDFCFE",
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 48
    },
    subTitle: {
        color: "#6B6B6B",
        fontSize: 16,
        marginBottom: 34
    },
    form: {
        flexDirection: 'row',
        marginBottom: 25
    },
    input: {
        flex: 1,
        height: 56,
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        marginBottom: 16,
        padding: 12,
        color: "#FFF",
        fontSize: 16
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#87028c",
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 12
    },
    buttonText: {
        color: "#FDFCFE",
        fontSize: 21,
        fontWeight: 'bold'
    },
    listEmptyText: {
        color: "#6B6B6B",
        fontSize: 14,
        textAlign: 'center',
    }
})