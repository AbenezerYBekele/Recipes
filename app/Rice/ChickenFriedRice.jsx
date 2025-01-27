import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import ChickenFriedRice from "@/assets/images/Rice/ChickenFriedRice.jpg";
import Recipes_Style from "@/app/Recipes_Style";
import YoutubeIframe from "react-native-youtube-iframe";

import styles from "../Style";

export default function Rice() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={ChickenFriedRice}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={[Recipes_Style.Title, { textAlign: "center" }]}>
        {"Chicken Fried Rice"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Active Time: </Text> {" 15 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Total Time: </Text> {" 25 mins"}{" "}
      </Text>

      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>
          • 2 cups cooked rice (preferably day-old rice for the best texture)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 lb chicken breast or thighs, diced
        </Text>
        <Text style={Recipes_Style.Text}>
          • 2 tablespoons vegetable oil (divided)
        </Text>
        <Text style={Recipes_Style.Text}>• 2 eggs, beaten</Text>
        <Text style={Recipes_Style.Text}>• 1 small onion, diced</Text>
        <Text style={Recipes_Style.Text}>• 2 cloves garlic, minced</Text>
        <Text style={Recipes_Style.Text}>
          • 1 cup mixed vegetables (carrots, peas, corn, etc.)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 2-3 tablespoons soy sauce (adjust to taste)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 tablespoon oyster sauce (optional for extra flavor)
        </Text>
        <Text style={Recipes_Style.Text}>• 1/2 teaspoon sesame oil</Text>
        <Text style={Recipes_Style.Text}>• Salt and pepper to taste</Text>
        <Text style={Recipes_Style.Text}>
          • Green onions for garnish (optional)
        </Text>
      </Collapsible>

      <Collapsible title="Directions">
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Prepare the rice: </Text>
          If you haven't already, cook your rice and let it cool. Day-old rice
          works best because it's firmer and less sticky.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Cook the chicken: </Text>
          Heat 1 tablespoon of vegetable oil in a large skillet or wok over
          medium-high heat. Add the diced chicken and cook until browned and
          cooked through (about 6-8 minutes). Season with salt and pepper.
          Remove from the skillet and set aside.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Scramble the eggs: </Text>
          In the same skillet, add a bit more oil if needed. Pour in the beaten
          eggs and scramble them until fully cooked. Remove and set aside with
          the chicken.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Stir-fry the veggies: </Text>
          Add the remaining tablespoon of oil to the skillet. Add the onion and
          garlic and sauté for 2-3 minutes until fragrant and softened. Add the
          mixed vegetables and stir-fry for another 3-4 minutes until tender.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Combine the rice: </Text>
          Add the cooled rice to the skillet, breaking up any clumps. Stir
          everything together to combine.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Add sauces: </Text>
          Pour in the soy sauce, oyster sauce (if using), and sesame oil. Stir
          well to coat the rice and vegetables.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Add chicken and eggs: </Text>
          Add the cooked chicken and scrambled eggs back into the skillet. Stir
          everything together and cook for another 2-3 minutes until everything
          is heated through.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Final seasoning: </Text>
          Taste and adjust seasoning with more soy sauce, salt, or pepper if
          needed.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Serve: </Text>
          Garnish with green onions (optional) and serve hot!
        </Text>
      </Collapsible>

      <Collapsible title="video">
        <View style={styles.container}>
          <YoutubeIframe
            videoId="EiGAyfLLy30"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.simplyrecipes.com/recipes/chicken_fried_rice/">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
