import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Importar todas as telas criadas 
import HomeScreen from "./screens/Home";
import Gta3Screen from "./screens/Gta3";
import GtaSAScreen from "./screens/GtaSA";
import GtaVCScreen from "./screens/GtaVC";
//Criar uma função createStackNavigator e armazenar em uma constante chamada Stack
const Stack = createStackNavigator();

export default class App extends React.Component {
  
  render() {
    return (
      //Usar o componente NavigationContainer e dentro dele adicionar as telas. 
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Gta3" component={Gta3Screen} />
          <Stack.Screen name="GtaSA" component={GtaSAScreen} />
          <Stack.Screen name="GtaVC" component={GtaVCScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}