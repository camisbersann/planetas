import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
        backgroundImage: 'url("../../assets/planetas-do-sistema-solar-no-universo.jpg")'
    },

    planetInput: {
        padding: 8,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        marginTop: 5,
    },

    button: {
        marginTop:20,
        padding: 10,
        backgroundColor: "#E6CCEF",
        borderRadius: 8,
    }
});
export default styles;