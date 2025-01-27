import React from "react";
import { StyleSheet } from "react-native";

const theme = {
  background: "#fff",
  text: "#000",
};

const colorScheme = "light"; // or "dark"

const Style = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  Text2: {
    color: "white",
    fontSize: 14,
    textAlign: "auto",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "rgba(0,0,0,0.7)",
    marginBottom: 10,
  },
  normalText: {
    color: "white",
    fontSize: 13.7,
    textAlign: "center",
    textAlign: "auto",
  },
  listText: {
    color: "White",
    fontSize: 16,
    fontWeight: "light",
    textAlign: "auto",
    marginBottom: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  link: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    textDecorationLine: "underline",
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "auto",
  },
  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: "rgba(0,0,0,0.75)",
    padding: 6,
    justifyContent: "center",
  },
  contentContainer: {
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 12,
    backgroundColor: theme.background,
  },
  separator: {
    height: 1,
    backgroundColor: colorScheme === "dark" ? "papayawhip" : "#000",
    width: "50%",
    maxWidth: 300,
    marginHorizontal: "auto",
    marginBottom: 10,
  },
  footerComp: {
    marginHorizontal: "auto",
  },
  row: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 600,
    height: 100,
    marginBottom: 10,
    borderStyle: "solid",
    borderColor: colorScheme === "dark" ? "papayawhip" : "#000",
    borderWidth: 1,
    borderRadius: 20,
    overflow: "hidden",
    marginHorizontal: "auto",
  },
  menuTextRow: {
    width: "65%",
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 5,
    flexGrow: 1,
  },
  menuItemTitle: {
    fontSize: 18,
    textDecorationLine: "underline",
  },
  menuItemText: {
    color: theme.text,
  },
  menuImage: {
    width: 100,
    height: 100,
  },
});
const App = () => {
  return null; // Replace with your component's render logic
};

export default Style;
