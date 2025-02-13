import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#483D8B",
    width: "auto",
    
  },

  editButton: {
    padding: 9,
    borderRadius: 8,
    backgroundColor: "#9F8DB5",
    alignItems: "center",
    width: 100,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginTop: 50,
  },

  textDetails: {
    color: "#fff",
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
    width: 400,
    marginBottom: 20,
  },

  planetAction: {
    flexDirection: "row",
    gap: 10,
    justifyContent: "center",
  },

  text: {
    fontSize: 16,
    marginBottom: 12,
    fontWeight: "bold",
  },
  subtext: {
    fontWeight: "normal",
    marginLeft: 5,
    
  },

  textTitle: {
    fontSize: 24,
    fontWeight: "300",
    textAlign: "center",
    marginBottom: 20,
  },

  caixinha: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 10,
    flexWrap: 'wrap'
  },
});
export default styles;
