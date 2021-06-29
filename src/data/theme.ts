import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0, 149, 246)',
      light: 'rgba(0, 149, 246, 0.3)',
    },
    secondary: {
      main: 'rgb(0, 55, 107)'
    },
    action: {
      disabledBackground: 'rgba(0, 149, 246, 0.3)',
      disabled: 'rgb(255, 255, 255)',
    },
  },
  typography: {
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif',
    body1: {
      fontWeight: 600, 
      fontSize: '1.02rem',
      lineHeight: 1.22,
    },
    subtitle1: {
      fontWeight: 600,
      fontSize: '0.8rem',
    },
    subtitle2: {
      fontWeight: 400,
      fontSize: '0.75rem',
      lineHeight: 1.35,
      letterSpacing: 'inherit',
    },
  }
});
