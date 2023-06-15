import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Image, Input } from 'react-native-elements';
import  Icon  from 'react-native-vector-icons/FontAwesome';

export default function Login({navigation}) {

  const [email, setEmail] = useState(null)
  const [address, setAddress] = useState(null)

  const entrar = () => {
      navigation.reset({
        index: 0,
        routes: [{name: "Menu"}]
      })
  }

      const cadastrar = () => {
        navigation.navigate("Cadastro")
        }
     
      
  return (
    <View style={styles.container}>
      <Image source= {require('../assets/minha-imagem.png')} style={styles.image}
        resizeMode="contain" />
      <Input
                placeholder="E-mail"
                leftIcon={{ type: 'front-awesome',name: 'inbox'}}
                onChangeText={value => setEmail(value) } 
                keybordtype="email-address"        
           />
           <Input
                placeholder="Sua Senha"
                leftIcon={{ type: 'front-awesome',name: 'lock'}}
                onChangeText={value => setAddress(value) } 
                secureTextEntry={true}
           />
           <Button
            icon={
                <Icon
                name="check"
                size={15}
                color="white"
                />
            }
            title="Entrar"
            buttonStyle={{ backgroundColor: 'orange' }}
            onPress={()=>entrar()}
            />

<Text>OU</Text>

        <Button
            icon={
                <Icon
                name="user"
                size={15}
                color="white"
                
                />
            }
            title="Cadastrar"
            
            buttonStyle={{ backgroundColor: 'orange',marginTop: 10  }}
            onPress={()=>cadastrar()}
            />
            
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
    
  },

});
