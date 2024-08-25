import React, { useState } from 'react'
import { ThemedView } from '../../components/ThemedView'
import { ThemedText } from '../../components/ThemedText'
import { StyleSheet,TextInput } from 'react-native'
import { MMKV } from 'react-native-mmkv'
import { useNavigation } from '@react-navigation/native'



const Welcome = () => {
 const [nome, setNome] = useState('');
 const [email,setEmail] = useState('')

 const storage = new MMKV({id:'gymapp'})
 const navigation = useNavigation();
 
 const handleSubmit = () =>{
    
    if(email && nome){
        storage.set('user',JSON.stringify({nome,email}))
        // navigation.navigate('home')
    }
}


  return (
    <ThemedView style={styles.container}>
        <ThemedText style={styles.tittle}> Olá seja bem-vindo(a) </ThemedText>
        <TextInput 
        placeholder= 'Nome'
        style={styles.input}
        onChangeText={setNome}
        placeholderTextColor="#a0a0a0" 
        />
           <TextInput 
        placeholder='Email'
        style={styles.input}
        onChangeText={setEmail}
        placeholderTextColor="#a0a0a0" 
        />

        <button onTouchEnd={handleSubmit} style={styles.button}>Entrar</button>
    </ThemedView>
  )

}
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent: 'center',
      alignItems: 'center',
      gap:30,
      padding: 50
    },
    input: {
        backgroundColor: '#fff',
        borderRadius:5,
        height: 40,
        width: '100%',
        paddingHorizontal:20,
        fontSize: 18,
    },
    tittle: {
        fontSize: 40,
        marginBottom: 50
    },
    button:{
        height:40,
        borderRadius: 5,
        width:'50%',
        borderWidth: 0,
        fontSize: 15,
        fontWeight: 'bold',
        backgroundColor: '#87CEEB',
        color: '#fff',
        textTransform: 'uppercase'
    },

    
  });
  

export default Welcome