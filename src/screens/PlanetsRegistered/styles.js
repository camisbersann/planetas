import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        backgroundColor: "#C0C0C0"
    },

    title: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        marginTop: 30,
        marginBottom: 50,
    },

    planetItem: {
        backgroundColor:"#4B0082",
        width: 200,
        padding: 20,
        borderRadius: 10,
    },

    planetName: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "300",
    },

    detailsButton: {
       backgroundColor: "#9370DB",
       padding: 10,
       width: 100,
       borderRadius: 10,
      marginTop: 15,
    },

    textDetails: {
        color: "#fff",
        textAlign: "center",
    }, 

    planetActions: {
        flexDirection: "row",
        gap: 10,
        justifyContent: "center",
    },
    
});
export default styles;