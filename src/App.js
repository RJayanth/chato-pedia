import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import { Route, Routes } from 'react-router-dom';
import PageNotFound from './components/PageNotFound';
import Chatbox from './components/Chatbox';

import { ThemeProvider } from '@mui/material/styles';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Login />} exact />
          <Route index element={<Login />} />
          <Route path="chatbox" element={<Chatbox />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
