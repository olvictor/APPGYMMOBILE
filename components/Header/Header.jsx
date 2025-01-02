import React from 'react'
import { ThemedText } from '../../components/ThemedText'
import {  StyleSheet, View } from 'react-native';


const HeaderPage = ({tittle,icon}) => {
  return (
    <View style={styles.titleContainer}>
        <ThemedText style={styles.title}>{tittle}</ThemedText>
        {icon}
    </View>
  )

}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    height: 60,
    width:"100%",
    backgroundColor:"#12162A",
    borderRadius : 1,
    borderBottomLeftRadius: 5,  // Canto inferior esquerdo arredondado
    borderBottomRightRadius: 5, // 
    zIndex: 200
  },
  title:{
    fontWeight: 'bold',
    letterSpacing: 2,
    fontSize: 30
  }
});

StyleSheet

export default HeaderPage