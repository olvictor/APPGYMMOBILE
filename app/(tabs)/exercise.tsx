import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React, { useContext, useState } from 'react'
import {  StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/authContext';
import HeaderPage from '../../components/Header/Header'
import { Ionicons } from '@expo/vector-icons';
import { Modal } from '@/components/Modal';


const exercise = () => {
  const context = useContext(AuthContext)
  const [open, setOpen] = useState(false)

  const handleTouch = () =>{
   setOpen(!open)
  }


  const plus = <Ionicons name='add-circle-outline' size={30} color="white" onPress={handleTouch}></Ionicons>
  const close = <Ionicons name='remove-circle-outline' size={30} color="black" onPress={handleTouch}></Ionicons>


  return (
    
  <ThemedView style={styles.titleContainer}>
    <HeaderPage tittle={"Exercises"} icon={plus}/>
    <ThemedText>aaaaaaaaa</ThemedText>
    <Modal.Root open={open}>
      <Modal.Header>
          <h2>aaa</h2>
          {close}
      </Modal.Header>
    </Modal.Root>
  </ThemedView>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
      flex:1,
      position:'relative',
}
    
  });
export default exercise