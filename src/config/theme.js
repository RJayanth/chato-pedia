import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      light: '#e5ffff',
      main: '#5ab9c1',
    },
    secondary: {
      main: '#b7e1e4',
    },
  },
});

theme.components = {
  MuiButton: {
    styleOverrides: {
      root: {
        textTransform: 'none',
        border: '1px solid #126C00',
        borderRadius: '8px',
        height: '60px',
        '&.Mui-disabled': {
          '&: focus': {
            border: '1px solid #969696',
            backgroundColor: '#F8F8F8',
            color: '#9E9E9E',
          },
          border: '1px solid #969696',
          backgroundColor: '#F8F8F8',
          color: '#9E9E9E',
        },
      },
    },
  },
};

export default theme;
