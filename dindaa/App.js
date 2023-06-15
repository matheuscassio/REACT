import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/Login';
import Menu from './screens/Menu';
import Cadastro from './screens/Cadastro';
import Entrega from './screens/Entrega';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
     
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Menu" component={Menu} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
      <Stack.Screen name="Entrega" component={Entrega} />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

