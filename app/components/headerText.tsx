import { StyleSheet, Text } from "react-native"
 
export default function headerText(){
     return <Text style={styles.header1}>Pokemon</Text>
}


const styles = StyleSheet.create(
     {
     header1: {
          fontWeight: 'bold',
          fontSize: 28,          
          color: '#fff' ,     
          padding: 8,          
     }
   
}
);