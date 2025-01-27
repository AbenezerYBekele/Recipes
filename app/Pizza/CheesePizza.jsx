import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import cheesePizza from "@/assets/images/Pizza/cheesePizza.jpg";
import YoutubeIframe from "react-native-youtube-iframe";
import Recipes_Style from "@/app/Recipes_Style";

export default function cheesePizzza() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={cheesePizza}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={[Recipes_Style.Title, { textAlign: "center" }]}>
        {"Cheese Pizza"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Active Time: </Text> {" 20 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Total Time: </Text>{" "}
        {" 1hr 40 mins"}{" "}
      </Text>

      <Collapsible title="Directions ">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 1 </Text>
          Let chilled covered dough stand at room temperature until dough is
          cool (not cold) and a fingerprint remains when dough is pressed, 1 to
          2 hours. Transfer 1 dough ball to a heavily floured surface. Using
          floured fingertips, firmly press all over dough, leaving a 1/2-inch
          border.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 2 </Text>
          If cooking in your home oven, preheat to 500°F with a baking steel or
          large round cast-iron pizza pan (such as Lodge 15-inch) on middle
          rack. Let pan preheat in oven for about 30 minutes. If using an
          outdoor pizza oven, preheat pizza oven and pizza stone according to
          manufacturer's instructions on high 20 minutes. (Note: Cooking with
          wood takes more experience to control the heat, so we've only included
          instructions for gas oven cooking here.)
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 3 </Text>
          Form a C-shape with the outer edge of your hand, and press firmly
          inside dough border to define a 1/2-inch wide ring around edge of
          dough. Lift dough onto the knuckles of both hands, and gently stretch,
          rotating dough after each stretch to maintain its round shape.
          Continue gently stretching dough, allowing gravity to help it expand,
          until a 10-inch circle of even thickness forms, with a slightly
          thicker outer ring. Lay dough round on a semolina-dusted pizza peel,
          reshaping as needed to form a circle. Spread dough round with Basic
          Pizza Sauce. Top with shredded mozzarella
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 4 </Text>
          Gently shake pizza peel with prepared pie to loosen. If pizza feels
          stuck in any areas, carefully lift pizza edge with a bench scraper,
          and dust peel with a 1:1 mixture of semolina and bread flour. Unload
          pizza onto preheated pan in home oven, or onto stone in outdoor pizza
          oven using quick, decisive movements: Set the peel edge on the pan at
          about a 20-degree angle, and quickly pull back peel to slide half of
          the pizza onto the pan. Gently shake the peel side to side while
          pulling it back to slide the rest of the pizza onto the pan, allowing
          it to stretch slightly.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 5 </Text>
          If baking in a home oven, bake at 500°F until edges of crust have
          puffed slightly, about 3 minutes. Rotate pan 90 degrees, and increase
          oven temperature to broil. Broil until pizza is cooked through and
          crust is browned, 3 to 6 minutes. If baking in an outdoor pizza oven,
          cook pizza, using peel to rotate pizza 90 degrees every 20 to 30
          seconds, until cooked through and crust is risen and charred in spots,
          2 to 4 minutes.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Step 6 </Text>
          Using peel, transfer pizza to a cutting board. Garnish with fresh
          basil or oregano, if desired, and cut into wedges.
        </Text>
      </Collapsible>

      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>• 1 ball Artisan Pizza Dough</Text>
        <Text style={Recipes_Style.Text}>• Semolina flour, for dusting </Text>
        <Text style={Recipes_Style.Text}>• All-purpose flour, for dusting</Text>
        <Text style={Recipes_Style.Text}>
          • 1/4 cup Basic Pizza Sauce (recipe follows)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 3 ounces shredded low-moisture mozzarella
        </Text>
        <Text style={Recipes_Style.Text}>
          • Fresh basil or oregano leaves, for garnishing{" "}
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
            videoId="kIKM82jHPjg"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.foodandwine.com/recipes/classic-cheese-pizza">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
