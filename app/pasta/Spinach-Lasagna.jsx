import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import SpinachLasagna from "@/assets/images/Pasta/Spinach-Lasagna.jpg";
import Recipes_Style from "@/app/Recipes_Style";
import YoutubeIframe from "react-native-youtube-iframe";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={SpinachLasagna}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> Prep Time: </Text>
        {" 20 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> Cook Time: </Text>1 hr 35 mins
      </Text>

      <Text style={Recipes_Style.Title}> Spinach lasagna </Text>
      <Collapsible title="Directions">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 1 </Text>Preheat the oven to
          350 degrees F (175 degrees C).
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 2 </Text> Heat oil in a
          large pot over medium heat. Add spinach, onion, garlic, oregano, and
          basil; sauté until onion has softened, 3 to 5 minutes. Pour in
          spaghetti sauce and water; simmer for 20 minutes.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 3 </Text>Meanwhile, mix
          cottage cheese, mozzarella, parsley, Parmesan, egg, salt, and pepper
          together in a bowl until well combined.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 4 </Text> Remove sauce from
          the heat; spoon a small amount into the bottom of a 9x13-inch baking
          pan. Place four uncooked noodles on top of sauce, then top with 1/3 of
          the remaining sauce. Layer with four more noodles, 1/2 of the
          remaining sauce, and 1/2 of the cheese mixture. Repeat layers once
          more with remaining noodles, sauce, and cheese mixture. Cover with
          foil.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 5 </Text> Bake in the
          preheated oven for 55 minutes. Remove the foil and bake for 15 more
          minutes. Let sit for 10 minutes before serving.
        </Text>
      </Collapsible>
      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>
          1 tablespoon extra virgin olive oil
        </Text>
        <Text style={Recipes_Style.Text}>
          2 (10 ounce) packages frozen chopped spinach, thawed and squeezed dry
        </Text>
        <Text style={Recipes_Style.Text}>½ medium onion, chopped</Text>
        <Text style={Recipes_Style.Text}>2 cloves garlic, crushed</Text>
        <Text style={Recipes_Style.Text}>½ teaspoon dried oregano</Text>
        <Text style={Recipes_Style.Text}>½ teaspoon dried basil</Text>
        <Text style={Recipes_Style.Text}>1 (32 ounce) jar spaghetti sauce</Text>
        <Text style={Recipes_Style.Text}>1 ½ cups water</Text>
        <Text style={Recipes_Style.Text}>2 cups non-fat cottage cheese</Text>
        <Text style={Recipes_Style.Text}>
          1 (8 ounce) package part skim mozzarella cheese, shredded
        </Text>
        <Text style={Recipes_Style.Text}>½ cup chopped fresh parsley</Text>
        <Text style={Recipes_Style.Text}>¼ cup grated Parmesan cheese</Text>
        <Text style={Recipes_Style.Text}>1 large egg</Text>
        <Text style={Recipes_Style.Text}>1 teaspoon salt</Text>
        <Text style={Recipes_Style.Text}>⅛ teaspoon black pepper</Text>
        <Text style={Recipes_Style.Text}>12 uncooked lasagna noodles</Text>
      </Collapsible>

      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="MkkBGbFZeWg"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>
      <ExternalLink href="https://www.allrecipes.com/recipe/23988/simple-spinach-lasagna/">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
