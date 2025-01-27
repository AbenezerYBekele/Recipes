import { Image, Platform, Text, View } from "react-native";
import { Collapsible } from "@/components/Collapsible";
import { ExternalLink } from "@/components/ExternalLink";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import OnePotPasta from "@/assets/images/Pasta/One-PotPasta.jpg";
import Recipes_Style from "@/app/Recipes_Style";
import YoutubeIframe from "react-native-youtube-iframe";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={
        <Image
          source={OnePotPasta}
          style={Recipes_Style.headerImage}
          size={310}
        />
      }
    >
      <Text style={Recipes_Style.Title}> One-Pan Pasta</Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> Prep Time:</Text> 15 mins
      </Text>
      <Text style={Recipes_Style.Text}>
        <Text style={{ fontWeight: "bold" }}> Total Time:</Text> 29 mins
      </Text>
      <Collapsible title="Why You Should Make One-Pan Pasta">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            • Ingredients are minimal:{" "}
          </Text>
          The sauce is just cherry or grape tomatoes, thinly sliced onion,
          plenty of garlic, fresh basil, extra-virgin olive oil, and a garnish
          of Parmesan, but they combine to create a rich flavor. There's
          culinary magic here: The linguine cooks in water that will ultimately
          become the sauce—none of the liquid is thrown away. As it reduces, all
          the lovely starchiness from the pasta transforms the remaining water
          into a creamy sauce that coats every strand.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>• Cleanup is a snap: </Text>
          This recipe fits so well with our (fewer pans equals fewer dishes)
          strategy. All you need equipment-wise for this pasta dinner is a small
          paring knife, a straight-sided skillet, and a pair of tongs, which are
          much easier than a spoon for tossing the pasta in the sauce to coat.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            • Comes together so quickly:{" "}
          </Text>
          Prep is short, and then you just bring everything to a boil and cook,
          stirring and turning the pasta frequently (using those tongs!). Dinner
          is ready in 20 minutes from start to finish.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            • The technique is revolutionary:{" "}
          </Text>
          Cooking the dried pasta in a skillet, not the usual large pot, along
          with the other ingredients once seemed radical, but now we consider
          this dish one of our (back pocket) recipes. Soon, you will, too.
        </Text>
      </Collapsible>
      <Collapsible title="Ingredients">
        <Text style={Recipes_Style.Text}>• 12 ounces linguine</Text>
        <Text style={Recipes_Style.Text}>
          • 12 ounces cherry or grape tomatoes, halved or quartered if large
        </Text>
        <Text style={Recipes_Style.Text}>
          • 1 onion, thinly sliced (about 2 cups)
        </Text>
        <Text style={Recipes_Style.Text}>• 4 cloves garlic, thinly sliced</Text>
        <Text style={Recipes_Style.Text}>• ½ teaspoon red-pepper flakes</Text>
        <Text style={Recipes_Style.Text}>
          • 2 sprigs basil, plus torn leaves for garnish
        </Text>
        <Text style={Recipes_Style.Text}>
          • 2 tablespoons extra-virgin olive oil, plus more for serving
        </Text>
        <Text style={Recipes_Style.Text}>
          • Coarse salt and freshly ground pepper
        </Text>
        <Text style={Recipes_Style.Text}>• 4 ½ cups water</Text>
        <Text style={Recipes_Style.Text}>
          • Freshly grated Parmesan cheese, for serving
        </Text>
      </Collapsible>
      <Collapsible title="Direction">
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            • (Step 1) Combine ingredients in pan and bring to a boil :{" "}
          </Text>
          Combine pasta, tomatoes, onion, garlic, red-pepper flakes, basil, oil,
          2 teaspoons salt, 1/4 teaspoon pepper, and water in a large
          straight-sided skillet. Bring to a boil over high heat.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>• (Step 2) Cook Stirring :</Text>{" "}
          Boil mixture, stirring and turning pasta frequently with tongs, until
          pasta is al dente and water has nearly evaporated, about 9 minutes.
        </Text>
        <Text style={Recipes_Style.Text}>
          <Text style={{ fontWeight: "bold" }}>
            • (Step 3) Season and serve :
          </Text>
          Season to taste with salt and pepper, divide among 4 bowls, and
          garnish with basil. Serve with oil and Parmesan.
        </Text>
      </Collapsible>

      <Collapsible title="video">
        <View style={Recipes_Style.container}>
          <YoutubeIframe
            videoId="cs8OYby6RrA"
            height={300}
            play={false}
            onReady={() => console.log("Video is ready")}
            onError={(error) => console.log("Error:", error)}
          />
        </View>
      </Collapsible>

      <ExternalLink href="https://www.marthastewart.com/978784/one-pan-pasta">
        <ThemedText type="link">Learn more</ThemedText>
      </ExternalLink>
    </ParallaxScrollView>
  );
}
