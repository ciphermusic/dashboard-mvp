import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../data/utils/supabaseClient'; // Adjust the import path as necessary

const AuthContext = createContext();

export function useAuth() {
  const context = useContext(AuthContext);
  console.log(context);
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

  // // Login function
  const login = async (email, password) => {
    const { error, user } = await supabase.auth.signIn({ email, password });
    if (error) throw error;
    setUser(user);
  };

  // // Logout function
  // const logout = async () => {
  //   const { error } = await supabase.auth.signOut();
  //   if (error) throw error;
  //   setUser(null);
  // };

  // Check if user is logged in
  const isLoggedIn = () => {
    // console.log("heyyyyy", user);
    return !!user
  };

  return (
    <AuthContext.Provider value={{ user, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}