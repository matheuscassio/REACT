import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Image } from 'react-native-elements';
   
export default function Entrega() {
    return(

        <View>
            <Image source={require('../assets/minha-imagem.png')} style={styles.image}
        resizeMode="contain" />
            <Text>Cadastro</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
        width: 'center',
        height: 82,
      marginBottom: 20,
    },
  });