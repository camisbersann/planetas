import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 30,
        backgroundColor: "#C0C0C0"
    },

    image: {
        width:130,
        height:130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "#fff",
        marginBottom: 10,
        marginLeft:100,
    },

    name:{
        fontSize: 22,
        color: "#0000CD",
        fontWeight: "600",
        textAlign: "center",
    },

    developerInfo:{
        fontSize: 16,
        color: "#0000CD",
        fontWeight: "600",
        textAlign: "center",
    },

    descricao: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 16,
    },

    line: {
       borderTopWidth:0.5,
    borderTopColor:'#000',
    borderBottomWidth:0.5,
    borderBottomColor:'#000',
    marginTop: 20,
    },

    icons: {
        flexDirection: "row",
        padding: 30,
        alignItems: "center",
        justifyContent: "center",
        gap: 10
    }
});
export default styles;