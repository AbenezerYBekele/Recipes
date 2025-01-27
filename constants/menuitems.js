import { Link } from "expo-router";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Style from "@/app/Style";

export const MENU_ITEMS = [
  {
    id: 1,
    title: (
      <Link
        href={"./pasta/Spinach-Lasagna"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Spinach Lasagna </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./pasta/Spinach-Lasagna"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {" "}
            Spinach lasagna is a vegetarian dish made with layers of pasta,
            spinach, ricotta, mozzarella, and Parmesan, baked in tomato sauce.{" "}
          </Text>
        </Pressable>
      </Link>
    ),
  },

  {
    id: 2,
    title: (
      <Link
        href={"./pasta/One-PotPasta"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> One Pot Pasta </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./pasta/One-PotPasta"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {" "}
            One Pot Pasta cooks pasta and sauce together in a single pot, making
            it quick and easy.{" "}
          </Text>
        </Pressable>
      </Link>
    ),
  },

  {
    id: 3,
    title: (
      <Link
        href={"./pasta/Creamy-Tomato-Rigatoni"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Creamy Tomato Rigatoni </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./pasta/Creamy-Tomato-Rigatoni"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {" "}
            Creamy tomato rigatoni is a pasta dish featuring rigatoni pasta in a
            rich, creamy tomato sauce made with tomatoes, cream, and seasonings.{" "}
          </Text>
        </Pressable>
      </Link>
    ),
  },
];
