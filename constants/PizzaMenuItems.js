import { Link } from "expo-router";
import { View, Text, ImageBackground, Pressable } from "react-native";
import Style from "@/app/Style";

export const MENU_ITEMS = [
  {
    id: 1,
    title: (
      <Link
        href={"./Pizza/CheesePizza"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Cheese Pizza </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./Pizza/CheesePizza"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {
              " A cheese pizza is a simple dish with a crispy crust, tomato sauce, and melted mozzarella cheese."
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
        href={"./Pizza/GrandmaPiePizza"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Grandma Pie Pizza </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./Pizza/GrandmaPiePizza"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {
              "Grandma pie pizza is a thin, square pizza with mozzarella and tomato sauce baked in a rectangular pan"
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
        href={"./Pizza/MargheritaPizza"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.buttonText}> Margherita Pizza </Text>
        </Pressable>
      </Link>
    ),
    description: (
      <Link
        href={"./Pizza/MargheritaPizza"}
        style={{ marginHorizontal: "auto" }}
        asChild
      >
        <Pressable>
          <Text style={Style.Text2}>
            {
              " A Margherita pizza features a thin crust topped with fresh tomato sauce, mozzarella, basil, and a drizzle of olive oil, celebrating simple, fresh flavors."
            }
          </Text>
        </Pressable>
      </Link>
    ),
  },
];
