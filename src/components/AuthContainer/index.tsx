import React from 'react';
import GetApp from '../GetApp';

const AuthContainer: React.FC = ({ children }) => {
  return (
    <div style={{width: 350}}>
      {children}
      <GetApp />
    </div>
  );
};

export default AuthContainer;
