import { Image, Text, StyleSheet } from "react-native";
import Card from "../../components/card";

type Props = {
    id: number;
    name: string;  
};

export default function PokemonCard({id,name}: Props) {
  return (     
          <Card>
               <Text style={styles.text}>#{id} </Text>
               <Image
               source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
               }}
               style={styles.image}
               />
               <Text style={styles.text}>{name}</Text>
          </Card>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
  image: {
    width: 72,
    height: 72,
    alignSelf: "center",
  },
});