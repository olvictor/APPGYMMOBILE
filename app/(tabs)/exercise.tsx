import { HelloWave } from '@/components/HelloWave'
import { ThemedText } from '@/components/ThemedText'
import { ThemedView } from '@/components/ThemedView'
import React, { useContext } from 'react'
import {  StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/authContext';

const exercise = () => {
  const context = useContext(AuthContext)
  
  return (
  <ThemedView style={styles.titleContainer}>
    <ThemedText type="title">exercise !</ThemedText>
    <HelloWave />
  </ThemedView>
  )
}

const styles = StyleSheet.create({
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8,
    },
    stepContainer: {
      gap: 8,
      marginBottom: 8,
    },
    reactLogo: {
      height: 178,
      width: 290,
      bottom: 0,
      left: 0,
      position: 'absolute',
    },
  });
export default exercise