import { StyleSheet } from "react-native";

const Recipes_Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },

  titleContainer1: {
    flex: 1,

    backgroundColor: "rgba(0,0,0,0.75)",
    position: "absolute",
    top: "7%",
    left: "25%",
    width: 200,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  title1: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",

    fontFamily: "hover",
    padding: 5,
  },
  headerImage: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  Title: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "auto",
    fontFamily: "hover",
  },
  Text: {
    color: "white",
    fontSize: 16,
    fontWeight: "light",
    textAlign: "auto",
    fontFamily: "hover",
  },
  Subtitle: {
    color: "white",
    fontWeight: "condensedBold",
    fontSize: 20,
    textAlign: "auto",
    fontFamily: "Times New Roman",
  },

  ImageButton: {
    color: "white",
    width: 170,
    height: 190,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  TextButton: {
    color: "white",
    fontFamily: "Cochin",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: 2,
  },
  ImageTable: {
    display: "table",
    width: "100%",
    borderCollapse: "collapse",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  cell: {
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
  },
});

export default Recipes_Style;
