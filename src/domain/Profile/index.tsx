import React, { useContext } from 'react';
import { AuthContext } from '../../containers/Auth';
import AuthContainer from '../../components/AuthContainer';
import Button from '../../components/Button';
import PageContainer from '../../components/PageContainer';
import { auth } from '../../data/firebase';

const Profile: React.FC = () => {
  const { user, profile } = useContext(AuthContext);

  const SignOutUser = async () => {
    await auth.signOut();
  };

  return (
    <PageContainer>
      <AuthContainer>
        <div>user id: {user?.email}</div>
        <div>full name: {profile?.fullName}</div>
        <div>user name: {profile?.userName}</div>
        <div>user password: {profile?.password}</div>
        <Button onClick={SignOutUser}>Sign out</Button>
      </AuthContainer>
    </PageContainer>
  );
};

export default Profile;
