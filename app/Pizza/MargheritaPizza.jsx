import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import MargheritaPizza from "@/assets/images/Pizza/MargheritaPizza.jpg";
import Recipes_Style from "@/app/Recipes_Style";
import YoutubeIframe from "react-native-youtube-iframe";

export default function cheesePizzza() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={MargheritaPizza}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={[Recipes_Style.Title, { textAlign: "center" }]}>
        Margherita Pizza
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Baking Time: </Text>{" "}
        {" 7 - 10 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Total Time: </Text>{" "}
        {" 1 hr 20 mins"}{" "}
      </Text>

      <Collapsible title="Dough Instructions">
        <Text style={Recipes_Style.Text}>
          In a small bowl, mix warm water and sugar, then sprinkle the yeast on
          top. Let it sit for 5–10 minutes until frothy.
        </Text>
        <Text style={Recipes_Style.Text}>
          In a large mixing bowl, combine flour and salt.
        </Text>
        <Text style={Recipes_Style.Text}>
          Add the yeast mixture and olive oil to the dry ingredients. Mix until
          a dough forms.
        </Text>
        <Text style={Recipes_Style.Text}>
          Knead the dough on a floured surface for about 8–10 minutes until
          smooth and elastic.
        </Text>
        <Text style={Recipes_Style.Text}>
          Place the dough in a lightly oiled bowl, cover with a damp cloth, and
          let it rise for 1–1.5 hours, or until it doubles in size.
        </Text>
      </Collapsible>
      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>• 3 ½ cups all-purpose flour</Text>
        <Text style={Recipes_Style.Text}>• 1 tsp salt </Text>
        <Text style={Recipes_Style.Text}>• 1 tsp sugar</Text>
        <Text style={Recipes_Style.Text}>
          • 1 packet (2 ¼ tsp) active dry yeast
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 ¼ cups warm water (110°F / 43°C)
        </Text>
        <Text style={Recipes_Style.Text}>• tbsp olive oil</Text>
      </Collapsible>
      <Collapsible title="For the Toppings:">
        <Text style={Recipes_Style.Text}>
          • 1 cup canned San Marzano tomatoes (or crushed tomatoes)
        </Text>
        <Text style={Recipes_Style.Text}>• 1 tbsp olive oil </Text>
        <Text style={Recipes_Style.Text}>• 1 clove garlic, minced</Text>
        <Text style={Recipes_Style.Text}>• Salt and pepper to taste</Text>
        <Text style={Recipes_Style.Text}>
          • 8 oz fresh mozzarella cheese, sliced
        </Text>
        <Text style={Recipes_Style.Text}>• Fresh basil leaves</Text>
        <Text style={Recipes_Style.Text}>
          • Extra virgin olive oil (for drizzling)
        </Text>
      </Collapsible>
      <Collapsible title="Prepare the sauce">
        <Text style={Recipes_Style.Text}>
          • In a small saucepan, heat olive oil over medium heat. Add the minced
          garlic and sauté until fragrant (about 30 seconds).
        </Text>
        <Text style={Recipes_Style.Text}>
          •Add the tomatoes and season with salt and pepper. Cook for 10–15
          minutes, breaking down the tomatoes with a spoon. Set aside to cool.
        </Text>
      </Collapsible>
      <Collapsible title="Assemble the Pizza">
        <Text style={Recipes_Style.Text}>
          • Preheat your oven to its maximum temperature (usually 475–500°F or
          245–260°C). Place a pizza stone or baking sheet in the oven to heat.
        </Text>
        <Text style={Recipes_Style.Text}>
          • Divide the dough into 2 portions (for two 12-inch pizzas) or keep it
          whole for one large pizza. Roll it out on a floured surface to your
          desired thickness.
        </Text>
        <Text style={Recipes_Style.Text}>
          • Spread a thin layer of tomato sauce over the dough, leaving a 1-inch
          border around the edges.
        </Text>
        <Text style={Recipes_Style.Text}>
          • Evenly distribute the mozzarella slices on top.
        </Text>
      </Collapsible>

      <Collapsible title="Basic Pizza Sauce">
        <Text style={Recipes_Style.Text}>
          The best cheese pizza sauce is made with raw Muir Glen Organic Tomato
          Sauce, garlic, olive oil, fresh oregano, salt, and pepper, offering a
          bright, sweet-savory flavor that enhances the pizza.
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 (15-oz.) can Muir Glen Organic Tomato Sauce
        </Text>
        <Text style={Recipes_Style.Text}>• 2 Tbsp. extra-virgin olive oil</Text>
        <Text style={Recipes_Style.Text}>
          • 2 medium garlic cloves, grated on a Microplane
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 1/2 tsp. chopped fresh oregano
        </Text>
        <Text style={Recipes_Style.Text}>• 3/4 tsp. fine sea salt</Text>
        <Text style={Recipes_Style.Text}>• 1/4 tsp. black pepper</Text>
      </Collapsible>

      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="az5D8C6K5Dk"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.abeautifulplate.com/the-best-homemade-margherita-pizza/">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
