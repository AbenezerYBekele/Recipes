import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import FriedRice from "@/assets/images/Rice/FriedRice.jpg";
import YoutubeIframe from "react-native-youtube-iframe";
import Recipes_Style from "@/app/Recipes_Style";

export default function Rice() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={FriedRice}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={[Recipes_Style.Title, { textAlign: "center" }]}>
        {"Shrimp Fried Rice"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>cook Time: </Text> {" 15 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Total Time: </Text> {" 30 mins"}{" "}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> Servers: </Text> {" 4"}{" "}
      </Text>

      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>
          For the Shrimp:
          {"\n"}• 1 lb (450g) shrimp (peeled and deveined)
          {"\n"}• 1 tbsp soy sauce
          {"\n"}• 1/2 tsp sesame oil
          {"\n"}• 1/2 tsp garlic powder
          {"\n"}• Pinch of black pepper
          {"\n\n"}For the Rice:
          {"\n"}• 3 cups cooked rice (day-old or cooled for the best results,
          jasmine rice works great)
          {"\n"}• 2 tbsp vegetable oil (or neutral oil like canola)
          {"\n"}• 1 medium onion (finely chopped)
          {"\n"}• 3 garlic cloves (minced)
          {"\n"}• 1 cup mixed vegetables (frozen peas, carrots, and corn work
          well)
          {"\n"}• 2 large eggs (beaten)
          {"\n"}• 3 tbsp soy sauce
          {"\n"}• 1 tbsp oyster sauce (optional but highly recommended for
          depth)
          {"\n"}• 1/2 tsp sesame oil
          {"\n"}• 2 green onions (chopped for garnish)
        </Text>
      </Collapsible>

      <Collapsible title="Instructions">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            Step 1: Marinate the Shrimp
          </Text>
          {"\n"}
          1. In a small bowl, toss the shrimp with soy sauce, sesame oil, garlic
          powder, and pepper. Let it marinate for about 10–15 minutes.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Step 2: Cook the Shrimp</Text>
          {"\n"}
          1. Heat a large skillet or wok over medium-high heat. Add 1 tbsp of
          vegetable oil.
          {"\n"}
          2. Add the shrimp in a single layer and cook for 2–3 minutes on each
          side until pink and cooked through. Remove and set aside.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Step 3: Sauté Aromatics and Veggies
          </Text>
          {"\n"}
          1. In the same skillet, add another tablespoon of oil. Add the onion
          and garlic, cooking for 1–2 minutes until fragrant. 2. Stir in the
          mixed vegetables and cook for 3–4 minutes until tender.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Step 4: Scramble the Eggs</Text>
          {"\n"}
          1. Push the veggies to one side of the pan. Pour the beaten eggs onto
          the empty side. {"\n"}
          2. Scramble the eggs until fully cooked, then mix them with the
          veggies.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Step 5: Add Rice and Sauces
          </Text>
          {"\n"}
          1. Add the cooled rice to the skillet, breaking up any clumps. Stir
          everything together.
          {"\n"}
          2. Drizzle in the soy sauce, oyster sauce (if using), and sesame oil.
          Stir-fry for 3–4 minutes until the rice is evenly coated and heated
          through.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>
            Step 6: Add Shrimp and Finish
          </Text>
          {"\n"}
          1. Return the cooked shrimp to the skillet and mix well.
          {"\n"}
          2. Taste and adjust seasoning with more soy sauce if needed.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Step 7: Garnish and Serve</Text>
          {"\n"}
          1. Sprinkle chopped green onions over the top.
          {"\n"}
          2. Serve hot, and enjoy your delicious homemade shrimp fried rice!
        </Text>
      </Collapsible>

      <Collapsible title="Tip for the best fried rice">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Use day-old rice:</Text>
          {"\n"}Freshly cooked rice tends to be too moist and sticky. If you
          don’t have day-old rice, spread freshly cooked rice on a baking sheet
          to cool and dry out slightly. stir-frying.{"\n\n"}
          <Text style={{ fontWeight: "bold" }}> Customize the veggies:</Text>
          {"\n"} You can add bell peppers, snap peas, or even spinach based on
          your preference. {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Spice it up:</Text>
          {"\n"} Add chili flakes or a splash of sriracha for heat.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Use a hot wok/skillet:</Text>
          {"\n"} High heat helps to create that slightly smoky flavor you get
          from restaurant-style fried rice.
        </Text>
      </Collapsible>
      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="-SaUCM4yFLo"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.simplyrecipes.com/recipes/shrimp_fried_rice/">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
