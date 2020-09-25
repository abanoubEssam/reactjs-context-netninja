import React from 'react';
import BookList from './components/BookList';
import Navbar from './components/Navbar';
import ToggleTheme from './components/ToggleTheme';
import AuthContextProvider from './contexts/AuthContext';
import ThemeContextProvider from './contexts/ThemeContext';

function App() {
  return (
    <div className="App">
    <AuthContextProvider>
      <ThemeContextProvider>
          <Navbar />
          <BookList />
          <ToggleTheme />
          </ThemeContextProvider>
          </AuthContextProvider>
    </div>
  );
}

export default App;
