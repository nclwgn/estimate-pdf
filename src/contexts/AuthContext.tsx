import { createContext, ReactNode, useEffect, useState,  } from "react";
import { User } from "../models/User";
import { auth } from "../services/firebase";

import { signInWithEmailAndPassword } from "firebase/auth";


interface AuthContextType {
  user?: User;
  signIn: (email: string, password: string) => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextType);

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
  const [ user, setUser ] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        const { displayName, uid } = user;

        if (!displayName || !uid)
          throw new Error('The provided user is missing informations');
          
        setUser({
          id: uid,
          name: displayName
        });
      }
    });

    // When unmounting the context, unsubscribes
    return () => {
      unsubscribe();
    }
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      let login = await signInWithEmailAndPassword(auth, email, password);

      const { displayName, uid } = login.user;

      if (!displayName || !uid)
        throw new Error('The provided user is missing informations');
      
      setUser({
        id: uid,
        name: displayName
      });
    }
    catch (e) {
      // Let the parent caller handle the exceptions
      console.log(e);
      throw e;
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}