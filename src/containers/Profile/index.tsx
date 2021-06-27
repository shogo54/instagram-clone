import React, { useContext } from 'react';
import { AuthContext } from '../Auth';
import Button from '../../components/Button';
import { auth } from '../../data/firebase';

const Profile: React.FC = () => {
  const { user, profile } = useContext(AuthContext);

  const SignOutUser = async () => {
    await auth.signOut();
  };

  return (
    <>
      <div>user id: {user?.email}</div>
      <div>full name: {profile?.fullName}</div>
      <div>user name: {profile?.userName}</div>
      <div>user password: {profile?.password}</div>
      <Button onClick={SignOutUser}>Sign out</Button>
    </>
  );
};

export default Profile;
