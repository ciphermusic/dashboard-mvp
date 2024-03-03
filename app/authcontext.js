import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../data/utils/supabaseClient'; // Adjust the import path as necessary

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  console.log("CONTEXT: " + context);
  return context;
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Effect to check active sessions and set user
  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user ?? null);

    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log(event, session);
      setUser(session?.user ?? null);
    });

    return () => {
      data.subscription.unsubscribe()
    };
  }, []);

  // Check if user is logged in
  const isLoggedIn = async () => {
    // console.log("heyyyyy", user);
    return !!user;
  };
  return (
    <AuthContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}