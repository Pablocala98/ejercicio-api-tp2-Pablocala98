import * as React from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet,Text, View,Button } from 'react-native'
const axios = require('axios').default;

export default function App() {

  const [hechizo, setHechizo] = React.useState("")

  function pegarAPI(){
    axios.get("https://hp-api.herokuapp.com/api/spells")
      .then(function(response){
       setHechizo(response.data[Math.floor(Math.random() * ((75+1)-0)+0)])
      })
      .catch(function(error){
          console.log(error);
      })
  
  }

  return (
    <View style={styles.container}>
      <Text variant="displayLarge">Presiona el Boton para Obtener un Hechizo Aleatorio!</Text>
      <Button
        title= "Obtener Hechizo"
        onPress={() => pegarAPI()}
      />
      <Text>Hechizo: {hechizo.name}</Text>
      <Text>Descripcion: {hechizo.description}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
