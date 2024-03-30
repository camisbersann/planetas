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
        marginTop: 60,
        marginBottom: 50,
    },

    planetItem: {
        backgroundColor:"#4B0082",
        width: 300,
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },

    planetName: {
        color: "#fff",
        fontSize: 25,
        textAlign: "center",
        fontWeight: "300",
        marginBottom: 20,
    },

    detailsButton: {
       backgroundColor: "#9370DB",
       padding: 10,
       width: 140,
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

    caixinha: {
        display: "flex",
        flexDirection: "row",
      },

     text: {
        fontSize: 16,
        marginBottom: 12,
        fontWeight: "bold",
        color:"#fff",
    },

    info:{
        color:"#fff",
    }
    
});
export default styles;