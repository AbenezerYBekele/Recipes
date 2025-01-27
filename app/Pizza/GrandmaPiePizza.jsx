import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import GrandmaPiePizza from "@/assets/images/Pizza/GrandmaPiePizza.jpg";
import Recipes_Style from "@/app/Recipes_Style";
import YoutubeIframe from "react-native-youtube-iframe";

export default function GrandmaPiePizz() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={GrandmaPiePizza}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={[Recipes_Style.Title, { textAlign: "center" }]}>
        {"Grandma pie pizza"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Active Time: </Text> {" 50 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Total Time: </Text>{" "}
        {" 1hr 29 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Yield: </Text> {" 6"}{" "}
      </Text>

      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>• 1 tablespoon tomato paste</Text>
        <Text style={Recipes_Style.Text}>• 1 tablespoon granulated sugar</Text>
        <Text style={Recipes_Style.Text}>• 1 tablespoon dried oregano</Text>
        <Text style={Recipes_Style.Text}>• 1 3/4 teaspoon kosher salt</Text>
        <Text style={Recipes_Style.Text}>• 1/2 teaspoon black pepper</Text>
        <Text style={Recipes_Style.Text}>
          • 1/4 teaspoon crushed red pepper
        </Text>
        <Text style={Recipes_Style.Text}>
          • 4 canned oil-packed anchovy fillets, drained and chopped (optional)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 pound fresh pizza dough, at room temperature
        </Text>
        <Text style={Recipes_Style.Text}>
          • 12 ounces low-moisture part-skim mozzarella, shredded (about 3 cups)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 2 ounces Parmesan cheese, grated (about 1/2 cup)
        </Text>
        <Text style={Recipes_Style.Text}>
          • Fresh basil leaves, for garnish
        </Text>
        <Text style={Recipes_Style.Text}></Text>
      </Collapsible>

      <Collapsible title="Directions">
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Step 1 </Text>
          Place oven rack in lower third of oven. Preheat oven to 525°F, or as
          high as the oven will go.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Step 2 </Text>
          Heat 2 tablespoons of the oil in a medium saucepan over medium. Add
          garlic, and cook, stirring occasionally, until lightly goldenly
          browned, about 1 minute. Stir in tomatoes, tomato paste, granulated
          sugar, oregano, kosher salt, black pepper, crushed red pepper, and, if
          desired, anchovies, using a wooden spoon to break up tomatoes. Reduce
          heat to medium-low, cover, and cook, stirring often, until sauce
          thickens, 40 to 45 minutes.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Step 3 </Text>
          Meanwhile, coat an 18- x 13-inch rimmed baking sheet with remaining
          1/2 cup oil. Gently stretch dough to cover bottom of pan. Cover dough
          with plastic wrap, and let stand in a warm place (about 75°F), free
          from drafts, until dough has puffed to almost doubled in size, 40 to
          50 minutes
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Step 4 </Text>
          Using your fingertips, make small indentations about 1 inch apart in
          dough. Sprinkle mozzarella and Parmesan evenly over top of dough,
          leaving about a 1/4-inch border around edges. Dollop tomato sauce over
          cheese.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          <Text style={{ fontWeight: "bold" }}>Step 5 </Text>
          Bake in preheated oven until dough is golden brown and crisp on bottom
          and sides, 10 to 15 minutes. Sprinkle top with basil leaves.
        </Text>
      </Collapsible>

      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="cb3YulXc6JQ"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.foodandwine.com/recipes/grandma-pie-pizza">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
