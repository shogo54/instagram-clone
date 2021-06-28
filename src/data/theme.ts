import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: 'rgb(0, 149, 246)',
      light: 'rgba(0, 149, 246, 0.3)',
    },
    action: {
      disabledBackground: 'rgba(0, 149, 246, 0.3)',
      disabled: 'rgb(255, 255, 255)',
    },
  },
});
