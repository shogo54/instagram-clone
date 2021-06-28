import React from 'react';
import { AuthProvider } from './containers/Auth';
import ThemeProvider from './containers/Theme';
import Routes from './Routes';

const App: React.FC = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </AuthProvider>
  );
};

export default App;
