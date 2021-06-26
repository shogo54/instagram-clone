import React, { useEffect, useState } from "react";
import firebase, { auth } from "../../data/firebase";

export const AuthContext = React.createContext<firebase.User | null>(null);

export const AuthProvider: React.FC = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => { 
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={currentUser}
    >
      {children}
    </AuthContext.Provider>
  );
};
