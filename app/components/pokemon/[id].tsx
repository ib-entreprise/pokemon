import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";

export default function Pokemon() {
  const params = useLocalSearchParams();

  const colors = [
    "#FFCDD2", "#F8BBD0", "#E1BEE7", "#D1C4E9", "#C5CAE9", 
    "#BBDEFB", "#B3E5FC", "#B2EBF2", "#B2DFDB", "#C8E6C9", 
    "#DCEDC8", "#F0F4C3", "#FFECB3", "#FFE0B2", "#FFCCBC", 
    "#D7CCC8", "#CFD8DC",
  ];

  const colorIndex = Number(params.id) % colors.length;
  const theBackgroundColor = colors[colorIndex];

  return (
    <View style={styles.container}  >
      <View>
        <Pressable onPress={router.back}>
          <Text style={styles.buttonBack}> -- Back</Text>
        </Pressable>
        <Text style={styles.text}> #{params.id}</Text>
      </View>
      <View>
        <Image
          source={{
            uri: "https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-pokemon-game-symbol-pikachu-play-png-image_5289221.png",
          }}
          style={styles.pokeball}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30, 
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonBack: {
    fontSize: 24,
  },
  pokeball: {
    opacity: 0.1,
    width: 208,
    height: 208,
    top: 8,
    position: "relative",
  },
});