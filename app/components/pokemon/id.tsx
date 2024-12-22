import { useLocalSearchParams } from "expo-router";
import { View,Text } from "react-native";

export function Pokemon(){
     const params = useLocalSearchParams();
     return <View>
          <Text> pokemon {params.id}</Text>
     </View>
}