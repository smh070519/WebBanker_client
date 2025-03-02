
import { RouterProvider } from 'react-router-dom';
import './App.css';
import router from './routues/router';
import GlobalStyle from './global/global';
import { ThemeProvider } from 'styled-components';
import theme from './global/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <RouterProvider router={router} future={{ v7_startTransition: true }}/>
      </ThemeProvider>
    </>
  );
}

export default App;
