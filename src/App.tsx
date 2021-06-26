import React from 'react';
import { AuthProvider } from './containers/Auth';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
};

export default App;
