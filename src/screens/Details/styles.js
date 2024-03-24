import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: "#483D8B",
        width: "auto"
    },

    editButton: {
        padding: 9,
        borderRadius: 8,
        backgroundColor: "#9F8DB5",
        alignItems:"center",
        width: 100,
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginTop: 20,
    },

    textDetails: {
        color:"#fff",
    },

    deleteButton: {
        padding: 8,
        borderRadius: 8,  
        backgroundColor: "#BB96DC",
        alignItems: "center",
        width: 100,
    },

    cardDetails: {
        marginTop: 20,
        padding: 10,
        backgroundColor: "#D3D3D3",
        borderRadius: 8,
    },

    planetAction: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
    },

    text: {
        fontSize: 16,
        marginBottom: 12,
    },

    textTitle: {
        fontSize: 24,
        fontWeight: "400",
        textAlign: "center",
        marginBottom: 10,
    }
});
export default styles;