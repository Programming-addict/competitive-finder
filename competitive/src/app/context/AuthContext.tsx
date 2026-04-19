'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth, db } from '@/app/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

interface UserData {
  name?: string;
  email?: string;
  photoURL?: string;
  [key: string]: any;
}

interface AuthContextType {
  user: User | null;
  userData: UserData | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  userData: null,
  loading: true,
});

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      
      if (currentUser) {
        try {
          // Fetch user data from Firestore
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data() as UserData);
          } else {
            // If user doc doesn't exist, use data from auth
            setUserData({
              name: currentUser.displayName || '',
              email: currentUser.email || '',
              photoURL: currentUser.photoURL || '',
            });
          }
        } catch (error) {
          console.error('Error fetching user data:', error);
          setUserData({
            name: currentUser.displayName || '',
            email: currentUser.email || '',
            photoURL: currentUser.photoURL || '',
          });
        }
      } else {
        setUserData(null);
      }
      
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, userData, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
