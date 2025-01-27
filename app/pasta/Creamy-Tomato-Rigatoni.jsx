import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import CreamyTomatoRigatoniPasta from "@/assets/images/Pasta/CreamyTomatoRigatoniPasta.jpg";
import Recipes_Style from "@/app/Recipes_Style";
import YoutubeIframe from "react-native-youtube-iframe";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={CreamyTomatoRigatoniPasta}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={Recipes_Style.Title}> Creamy Tomato Rigatoni Pasta</Text>
      <Collapsible title="Key Ingredients in Creamy Tomato Rigatoni">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Dried rigatoni pasta: </Text>
          This tubular shape is perfect for capturing pockets of sauce.{" "}
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}> Canned crushed tomatoes: </Text>{" "}
          You’ll use a large can, which creates the bulk of the sauce.{" "}
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Heavy cream: </Text> Added at the
          end of cooking, this makes the sauce lush and velvety with just a
          touch of richness.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>Pasta water: </Text> Just scoop
          some out of the pot when the pasta is finished cooking. This starchy
          water helps to thicken the sauce and is the key to the sauce clinging
          to the pasta so well.
        </Text>
      </Collapsible>
      <Collapsible title="How to Make Creamy Tomato Rigatoni">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Make and simmer the sauce:{" "}
          </Text>
          Sauté the onion and garlic in melted butter, stir in a can of crushed
          tomatoes, and simmer the sauce to allow the flavors to meld.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Meanwhile, cook the pasta:{" "}
          </Text>
          Cook the pasta in salted boiling water for one minute less than the
          package instructions for al dente. Reserve some pasta water, then
          drain the pasta.{" "}
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            {" "}
            Finish the pasta in the sauce:{" "}
          </Text>
          Stir some of the reserved pasta water and heavy cream into the sauce
          and simmer to slightly thicken. Add the pasta to the sauce and stir
          until well-coated.{" "}
        </Text>
      </Collapsible>
      <Collapsible title="Helpful Swaps">
        <Text style={Recipes_Style.Text}>
          Any short tubular pasta can be used in place of rigatoni here — penne,
          ziti, and paccheri are all good choices.
        </Text>
        <Text style={Recipes_Style.Text}>
          Canned diced tomatoes (and the juices) or whole peeled tomatoes can be
          used as a substitute for crushed tomatoes. You’ll just want to process
          them with an immersion blender or regular blender to break them down
          first.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          An equal amount of half-and-half can be used in place of heavy cream.{" "}
        </Text>
      </Collapsible>
      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>•3 tablespoons unsalted butter</Text>
        <Text style={Recipes_Style.Text}>• 3 tablespoons unsalted butter</Text>
        <Text style={Recipes_Style.Text}>
          • 1 small yellow onion, diced (about 1 cup)
        </Text>
        <Text style={Recipes_Style.Text}>• 3 cloves garlic, minced</Text>
        <Text style={Recipes_Style.Text}>
          • 1 1/2 teaspoons kosher salt, plus more for the pasta water
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1/4 teaspoon freshly ground black pepper
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1/4 teaspoon red pepper flakes (optional)
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 (28-ounce) can crushed tomatoes
        </Text>
        <Text style={Recipes_Style.Text}>• 1 pound dried rigatoni pasta</Text>
        <Text style={Recipes_Style.Text}>• 1/2 cup heavy cream</Text>
        <Text style={Recipes_Style.Text}>
          • Grated Parmesan cheese, for garnish (optional)
        </Text>
        <Text style={Recipes_Style.Text}>
          • Chopped fresh parsley leaves, for garnish (optional)
        </Text>
      </Collapsible>

      <Collapsible title="INSTRUCTIONS">
        <Text style={Recipes_Style.Text}>
          {" "}
          Melt 3 tablespoons unsalted butter in a Dutch oven or large pot over
          medium heat. Add 1 small diced yellow onion and cook, stirring
          occasionally, until softened, 3 to 5 minutes. Stir in 3 minced garlic
          cloves, 1 1/2 teaspoons kosher salt, 1/4 teaspoon black pepper, and
          1/4 teaspoon red pepper flakes if using. Cook until fragrant, about 30
          seconds.
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          Stir in 1 (28-ounce) can crushed tomatoes and bring to a simmer.
          Reduce the heat to maintain a gentle simmer and cook, stirring
          occasionally, until the flavors meld, about 20 minutes. Meanwhile,
          cook the pasta.{" "}
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          Bring a large pot of salted water to a boil. Add 1 pound dried
          rigatoni pasta and cook 1 minute less than the package instructions
          for al dente. Reserve 1/2 cup of the pasta water. Drain the rigatoni{" "}
        </Text>
        <Text style={Recipes_Style.Text}>
          {" "}
          Return the sauce to medium heat. Stir in 1/2 cup heavy cream and the
          reserved pasta water and bring to a simmer. Gently stir in the pasta
          until well-coated. Garnish with Parmesan cheese and chopped parsley
          leaves if desired.{" "}
        </Text>
      </Collapsible>
      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="Y74wh85PpwQ"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.thekitchn.com/creamy-tomato-rigatoni-pasta-recipe-23694989">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
