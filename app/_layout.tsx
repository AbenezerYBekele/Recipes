import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen
          name="Pasta"
          options={{ headerShown: true, title: "Pasta recipes" }}
        />
        <Stack.Screen
          name="Pizza"
          options={{ headerShown: true, title: "Pizza recipes" }}
        />
        <Stack.Screen
          name="index"
          options={{ headerShown: false, title: "Recipes" }}
        />
        <Stack.Screen
          name="pasta/Spinach-Lasagna"
          options={{ headerShown: true, title: "Spinach Lasagna" }}
        />
        <Stack.Screen
          name="pasta/One-PotPasta"
          options={{ headerShown: true, title: "One Pot Pasta" }}
        />
        <Stack.Screen
          name="pasta/Creamy-Tomato-Rigatoni"
          options={{ headerShown: true, title: "Creamy Tomato Rigatoni" }}
        />
        <Stack.Screen
          name="Pizza/CheesePizza"
          options={{ headerShown: true, title: "Cheese Pizza" }}
        />
        <Stack.Screen
          name="Pizza/GrandmaPiePizza"
          options={{ headerShown: true, title: "Grandma Pie Pizz" }}
        />
        <Stack.Screen
          name="Pizza/MargheritaPizza"
          options={{ headerShown: true, title: "Margherita Pizza" }}
        />
        <Stack.Screen
          name="Rice/ChickenFriedRice"
          options={{ headerShown: true, title: "Chicken Fried Rice" }}
        />
        <Stack.Screen
          name="Rice/RiceWithShrimp"
          options={{ headerShown: true, title: "Shrimp Fried Rice" }}
        />
        <Stack.Screen
          name="Rice/VeggieStirFryRice"
          options={{ headerShown: true, title: "Veggie Fried Rice" }}
        />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}
