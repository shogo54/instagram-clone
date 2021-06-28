import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../data/theme';

const ThemeProvider: React.FC = ({ children }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
