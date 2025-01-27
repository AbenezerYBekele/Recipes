import { Link } from "expo-router";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Style from "@/app/Style";

export const MENU_ITEMS = [
  {
    id: 1,
    title: (
      <Link
        href={"./Rice/ChickenFriedRice"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Chicken Fried Rice </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./Rice/ChickenFriedRice"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {
              " Chicken fried rice is a quick, flavorful dish made with chicken, eggs, vegetables, and rice stir-fried in soy and sesame sauce."
            }
          </Text>
        </Pressable>
      </Link>
    ),
  },
  {
    id: 2,
    title: (
      <Link
        href={"./Rice/RiceWithShrimp"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Shrimp Fried Rice</Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./Rice/RiceWithShrimp"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {
              "Shrimp Fried Rice is a savory, one-pan dish with shrimp, rice, veggies, and soy sauce."
            }
          </Text>
        </Pressable>
      </Link>
    ),
  },
  {
    id: 3,
    title: (
      <Link
        href={"./Rice/VeggieStirFryRice"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Veggie Stir Fry Rice </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./Rice/VeggieStirFryRice "}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {
              " Veggie stir-fry rice is a quick, flavorful dish made with mixed vegetables, day-old rice, and a savory soy-sesame sauce."
            }
          </Text>
        </Pressable>
      </Link>
    ),
  },
];
