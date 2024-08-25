import React, { createContext,ReactNode, useEffect, useState } from 'react'
import { MMKV, useMMKVObject } from 'react-native-mmkv';


interface User {
    nome: string,
    email: string
}
interface AuthContextProps {
    children: ReactNode;
    user : User | null
}


export const AuthContext = React.createContext<AuthContextProps | undefined>(undefined);


const AuthContextProvider: React.FC<AuthContextProps> = ({ children }) => {
    const storage = new MMKV({id: 'gymapp'});
    const [ user, setUser] = useState<User | null> (null);
    
   useEffect(()=>{
    const userDB = storage.getString('user');
    setUser(userDB ? JSON.parse(userDB) : null);
   },[])
    

   const authContextValue: AuthContextProps = {
    children: null,
    user
};


    return (
    <AuthContext.Provider value={authContextValue}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider