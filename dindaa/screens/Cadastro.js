import React, { isValidElement, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native';
import { Button, CheckBox, Image, Input, Text } from 'react-native-elements';
import { TextInputMask, TextInputMaskMethods } from 'react-native-masked-text';
import  Icon  from 'react-native-vector-icons/FontAwesome';
import usuarioService from '../service/UsuarioService';

export default function Cadastro({navigation}) {

  const [email, setEmail] = useState(null)
  const [nome, setNome] = useState(null)
  const [telefone, setTelefone] = useState(null)
  const [turma, setTurma] = useState(null)
  const [senha, setSenha] = useState(null)
  const [isSelected, setSelected] = useState(false)
  const [errorEmail, setErrorEmail] = useState(null)
  const [errorNome, setErrorNome] = useState(null)
  const [errorTelefone, setErrorTelefone] = useState(null)
  const [errorTurma, setErrorTurma] = useState(null)
  const [errorSenha, setErrorSenha] = useState(null)

  let telefoneField = null


    const validar = () => {
      let error = false
      setErrorEmail(null)
      setErrorNome(null)
      setErrorTelefone(null)
      setErrorTurma(null)
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if (!re.test(String(email).toLowerCase())){
        setErrorEmail("Preencha Corretamento Seu E-mail")
        error = true
      }
      if (nome == null){
        setErrorNome("Preencha Corretamento Seu Nome")
        error = true
      }
      
      if (!telefoneField.isValid()){
        setErrorTelefone("Preencha Corretamento Seu Telefone")
        error = true
      }
      if (turma == null){
        setErrorTurma("Preencha Corretamento Sua Série e Turma")
        error = true
      }
      if (senha == null){
        setErrorSenha("Preencha a senha")
        error = true
      }
      return !error


    }

    const salvar = () => {
      if (validar()){
        let data = {
          email:email,
          nome: nome,
          telefone: telefone,
          turma: turma,
          senha:senha
        }
        usuarioService.cadastrar(data)
        .then((response)=>{
          console.log(response)
        })
        .catch((error)=>{
          console.log(error)
          console.log("DEU errro")
        })
        
    }
  }

      
  return (
    <KeyboardAvoidingView
    //behavior={Platform.OS == "ios" ? "padding" : "height"}
      style={styles.container}
      keyboardVerticalOffset={80}>
      <Image source= {require('../assets/minha-imagem.png')} style={styles.image}
        resizeMode="contain" />
        <ScrollView style={{width: "100%"}}>
      <Input
                placeholder="E-mail"
                onChangeText={value =>{ 
                  setEmail(value) 
                  setErrorEmail(null)
                }}
                keybordtype="email-address"
                placeholderSt ="orage"    
                errorMessage={errorEmail}    
           />
           <Input
                placeholder="Nome Completo"
                onChangeText={value => {
                  setNome(value) 
                  setErrorNome(null)
                }} 
                errorMessage={errorNome} 
           />
             <View style={styles.containerMask}>
            <TextInputMask
                  placeholder="Telefone"
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) '
                  }}
                  value={telefone}
                  onChangeText={value => {
                    setTelefone(value)
                    setErrorTelefone(null)
                  }}
                  keyboardType="phone-pad"
                  returnKeyType="done"      
                  style={styles.maskedInput}
                  ref={(ref) => telefoneField = ref}
              />    
              </View>  
              <Text style={styles.errorMessage}>{errorTelefone}</Text>
              

           <Input
                placeholder="Série e turma"
                onChangeText={value => {
                  setTurma(value) 
                  setErrorTurma(null)
                }} 
                errorMessage={errorTurma} 
           />
           <Input
                placeholder="Senha"
                onChangeText={value => setSenha(value)}
                errorMessage={errorSenha}
                secureTextEntry={true}
        />

            <CheckBox
                title= "Eu li e Aceito as Politicas e o Termo De USO! "
                checkedIcon="check"
                uncheckedIcon="square-o"
                checkedColor="green"
                uncheckedColor="red"
                checked={isSelected}
                onPress={() => setSelected(!isSelected)}

            />

           <Button
            icon={
                <Icon
                name="check"
                size={15}
                color="white"
                />
            }
            title="Salvar"
            buttonStyle={{ backgroundColor: 'orange' }}
            onPress={()=>salvar()}
            />
   </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  maskedInput: {
    flexGrow: 1,
    height: 40,
    fontSize: 18,
    borderBottomColor: "gray",
    borderBottomWidth: 1,
    borderStyle: "solid",
    alignSelf: "flex-start"
  },
  containerMask: {
    alignSelf: "flex-start",
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  errorMessage: {
    alignSelf: "flex-start",
    marginLeft: 15,
    color: "#f00",
    fontSize: 12
  }

});
