import { Image, Text, StyleSheet, Pressable } from "react-native";
import Card from "../../components/card";
import { Link } from "expo-router";

type Props = {
    id: number;
    name: string;  
};

export default function PokemonCard({id,name}: Props) {
  return (     
     <Link href={{ pathname:'/components/pokemon/id' , params:{'id': id} }}  style={styles.card} asChild>
     <Pressable>
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
     </Pressable>
</Link>
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
  card: {
     flex: 1/3,
     backgroundColor:'#fff',
    shadowColor: "#000",
    shadowOpacity: 0.1,
    margin:4,
    borderRadius:8,
    
}

  
});