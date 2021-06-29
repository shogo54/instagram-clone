import React from 'react';

const AuthContainer: React.FC = ({ children }) => {
  return (
    <div style={{width: 350, height: 786, marginTop: 32, marginBottom: 32}}>
      {children}
    </div>
  );
};

export default AuthContainer;
