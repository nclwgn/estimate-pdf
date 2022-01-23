import { createContext, ReactNode, useEffect, useState,  } from "react";
import { User } from "../models/User";
import { auth } from "../services/firebase";

import { signInWithEmailAndPassword, signOut as firebaseSignOut } from "firebase/auth";


interface AuthContextType {
  user?: User;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
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
        const { uid, email } = user;
        
        if (!uid || !email)
          throw new Error('The provided user is missing informations');
          
        setUser({
          id: uid,
          email
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
      await signInWithEmailAndPassword(auth, email, password);
    }
    catch (e) {
      // Let the parent caller handle the exceptions
      console.log(e);
      throw e;
    }
  }

  const signOut = async () => {
    try {
      await firebaseSignOut(auth);

      setUser(undefined);
    }
    catch (e) {
      console.log(e);
      throw e;
    }
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}