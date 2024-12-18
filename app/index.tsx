import { Text, View, Image, StyleSheet, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import HeaderText from "./components/headerText";
import Card from "./components/card"; // Assurez-vous que le chemin est correct
// import PokemonCard from "./pokemon/card"; // Vérifiez que ce chemin est également correct
import PokemonCard from "./components/pokemon/pokemonCard";

export default function Index() {  
  const pokemons = Array.from({ length: 37 }, (_, k) => ({
    name: `Pokemon name ${k + 1}`,
    id: k + 1,
  }));

  return (
      <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#f33",
        padding: 16,
      }}
    >
      <View style={styles.header}>
        <Image
          source={require("@/assets/images/pr.jpg")}
          style={styles.headerImage}
        />
        <HeaderText />
      </View>
      <Card>
        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.id.toString()}
          numColumns={3}
          renderItem={({ item }) => (
              <PokemonCard id={item.id} name={item.name} />
          )}
        />
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  headerImage: {
    width: 28,
    height: 28,
  },
  item: {
    flex: 1/3,
    margin : 10,
    backgroundColor: "#fff",
    padding: 10,
    marginVertical: 5,
    // marginHorizontal: 5,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    height: 200,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "bold",
  },
});