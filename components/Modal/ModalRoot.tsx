import React from 'react'
import { Dimensions, StyleSheet } from 'react-native';
import { rgbaColor } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';

interface ModalRootProps {
    open: boolean;
    children: React.ReactNode
  }


const { height } = Dimensions.get('window'); // Pega a altura da tela
const ModalRoot:React.FC<ModalRootProps> = ({open, children}) => {
  return (
    <div style={styles.modalContainer}>
     {open && (
        <div style={styles.modal}>
            {children}
        </div>
        )}
    </div>
  )
}

const styles = StyleSheet.create({
    modalContainer : {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, .15)',
        position: 'absolute',
        top: 0,
        left: 0,
        width: "98%",
        height: height,
        padding: 10,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex:1
    },
    modal:{
        backgroundColor:'white',
        flex: 1,
        height: 600,
        borderRadius: 10
    }
})

export default ModalRoot