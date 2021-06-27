import React, { useEffect, useState } from 'react';
import firebase, { auth, database } from '../../data/firebase';
import { IUser, IUserProfile } from '../../modules/user';

export const AuthContext = React.createContext<IUser>({ user: null, profile: null });

export const AuthProvider: React.FC = ({ children }) => {
  // set up state for user, user profile, and pending
  const [currentUser, setCurrentUser] = useState<firebase.User | null>(null);
  const [currentUserProfile, setCurrentUserProfile] = useState<IUserProfile | null>(null);
  const [pending, setPending] = useState(true);

  // listen to firebase auth state change
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      // if user is logged in
      if (user) {
        // get user profile and update state
        await database.ref('users/' + user.uid).once('value', (snap) => {
          setCurrentUserProfile(snap.val());
        });
      }

      // update state with user
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if (pending) {
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider value={{ user: currentUser, profile: currentUserProfile }}>
      {children}
    </AuthContext.Provider>
  );
};
