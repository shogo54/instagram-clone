import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { AuthContext } from '../Auth';
import { auth } from '../../data/firebase';

const Profile: React.FC = () => {
  const user = useContext(AuthContext);

  const SignOutUser = async () => {
    auth.signOut();
  };

  return (
    <>
      <div>{user?.email}</div>
      <Button variant="contained" onClick={SignOutUser}>Sign out</Button>
    </>
  );
};

export default Profile;
