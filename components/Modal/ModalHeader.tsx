import React from 'react'
import { StyleSheet } from 'react-native'


interface ModalHeaderProps {
  
    children: React.ReactNode
  }

const ModalHeader:React.FC<ModalHeaderProps>= ({children}) => {
  return (
    <div style={styles.headerContainer}>{children}</div>
  )
}



const styles = StyleSheet.create({
  headerContainer:{
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems:"center",
  }
})


export default ModalHeader