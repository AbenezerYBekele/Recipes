import { View, Text, ImageBackground, Pressable, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import style from "./Style";
import cuisine_backgruond from "@/assets/images/cuisine/cuisine_backgruond.jpg";
import cheesePizza from "@/assets/images/Pizza/cheesePizza.jpg";
import CreamyTomatoRigatoniPasta from "@/assets/images/Pasta/CreamyTomatoRigatoniPasta.jpg";
import FriedRice from "@/assets/images/Rice/FriedRice.jpg";
import Recipes_Style from "./Recipes_Style";

// import Pasta from "../Pasta.jsx";

const App = () => {
  return (
    <View style={style.container}>
      <ImageBackground
        source={cuisine_backgruond}
        resizeMethod="cover"
        style={style.image}
      >
        <View style={Recipes_Style.titleContainer1}>
          <Text style={Recipes_Style.title1}> Easy Recipes </Text>
        </View>
        <View style={Recipes_Style.ImageTable}>
          <View style={Recipes_Style.row}>
            <View style={Recipes_Style.cell}>
              <View style={Recipes_Style.ImageButton}>
                <Link href={"./Pasta"} style={{ margin: 10 }} asChild>
                  <Pressable>
                    <Image
                      source={CreamyTomatoRigatoniPasta}
                      style={{ width: 150, height: 150 }}
                    />
                    <Text style={Recipes_Style.TextButton}> Pasta </Text>
                  </Pressable>
                </Link>
              </View>
            </View>

            <View style={Recipes_Style.cell}>
              <View style={Recipes_Style.ImageButton}>
                <Link href={"./Pizza"} style={{ margin: 10 }} asChild>
                  <Pressable>
                    <Image
                      source={cheesePizza}
                      style={{ width: 150, height: 150 }}
                    />
                    <Text style={Recipes_Style.TextButton}> Pizza </Text>
                  </Pressable>
                </Link>
              </View>
            </View>
          </View>
          <View style={Recipes_Style.cell}>
            <View style={Recipes_Style.ImageButton}>
              <Link href={"./Rice"} style={{ margin: 10 }} asChild>
                <Pressable>
                  <Image
                    source={FriedRice}
                    style={{ width: 150, height: 150 }}
                  />
                  <Text style={Recipes_Style.TextButton}> Rice </Text>
                </Pressable>
              </Link>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default App;
