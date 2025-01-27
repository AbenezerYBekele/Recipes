import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import VeggieStirFryRice from "@/assets/images/Rice/FriedRice.jpg";
import YoutubeIframe from "react-native-youtube-iframe";
import Recipes_Style from "@/app/Recipes_Style";

export default function Rice() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={VeggieStirFryRice}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={[Recipes_Style.Title, { textAlign: "center" }]}>
        {"Vegetable Fried Rice"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> Prep Time: </Text> {" 10 mins"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> cook Time: </Text> {" 20 mins"}
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}>Total Time: </Text> {"30 mins"}{" "}
      </Text>

      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>
          • 2 cups cooked rice (preferably day-old rice for better texture)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 2 tablespoons vegetable oil (divided)
        </Text>
        <Text style={Recipes_Style.Text}>• 1 small onion, diced</Text>
        <Text style={Recipes_Style.Text}>• 2 cloves garlic, minced</Text>
        <Text style={Recipes_Style.Text}>
          • 1 cup mixed vegetables (carrots, peas, bell peppers, corn, etc.)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 2 tablespoons soy sauce (adjust to taste)
        </Text>
        <Text style={Recipes_Style.Text}>• 1 teaspoon sesame oil</Text>
        <Text style={Recipes_Style.Text}>• Salt and pepper to taste</Text>
        <Text style={Recipes_Style.Text}>
          • Green onions, chopped (optional, for garnish)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 tablespoon rice vinegar (optional, for extra flavor)
        </Text>
      </Collapsible>

      <Collapsible title="Instructions">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Prepare the rice:</Text>
          {"\n"}• If you don't have day-old rice, cook fresh rice and let it
          cool completely. Spread it out on a baking sheet to cool faster. Cold
          rice works best as it has a firmer texture and won't become mushy.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Sauté the aromatics: </Text>
          {"\n"}• Heat 1 tablespoon of vegetable oil in a large skillet or wok
          over medium-high heat.
          {"\n\n"}• Add diced onion and minced garlic, and sauté for 2-3 minutes
          until fragrant and softened.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Cook the vegetables:</Text>
          {"\n"}• Add the mixed vegetables to the skillet and stir-fry for 4-5
          minutes until they are tender but still vibrant and crisp. You can use
          frozen vegetables for convenience.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}>Fry the rice: </Text>
          {"\n"}• Push the vegetables to one side of the skillet, and add the
          remaining tablespoon of oil on the empty side.
          {"\n\n"}• Add the day-old rice, breaking up any clumps with a spatula.
          Stir-fry for 4-5 minutes until the rice is heated through and starts
          to crisp up slightly.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}> Season the rice: </Text>
          {"\n"}•{"\n\n"}
          <Text style={{ fontWeight: "bold" }}> Final touches </Text>
          {"\n"}
          Stir everything to combine well, ensuring the rice is evenly flavored
          and heated through. Taste and adjust seasoning if needed.
          {"\n\n"}
          <Text style={{ fontWeight: "bold" }}> Serve </Text>
          {"\n"}
          Garnish with chopped green onions (optional) and serve immediately.
          {"\n\n"}
        </Text>
      </Collapsible>

      <Collapsible title="Tip for the best fried rice">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Cold rice:</Text>
          {"\n"} Day-old rice is best for stir-frying as it’s less sticky and
          has better texture. stir-frying.{"\n\n"}
          <Text style={{ fontWeight: "bold" }}> Veggie variations:</Text>
          {"\n"} Customize the veggies based on your preference—broccoli, snap
          peas, or zucchini work well too. {"\n\n"}
          <Text style={{ fontWeight: "bold" }}> Add tofu or tempeh: </Text>
          {"\n"}For extra protein, you can add sautéed tofu or tempeh to the
          stir-fry..
        </Text>
      </Collapsible>
      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="g1Zbx81LlbE"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.seriouseats.com/easy-vegetable-fried-rice-recipe">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
