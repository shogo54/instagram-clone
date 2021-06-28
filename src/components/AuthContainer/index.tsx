import React from 'react';

const AuthContainer: React.FC = ({ children }) => {
  return (
    <div style={{width: 350}}>
      {children}
    </div>
  );
};

export default AuthContainer;
