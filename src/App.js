import React, { useEffect, useState } from "react";
import './styles/App.css'
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./UI/Navbar/Navbar";
import { AuthContext } from "./context";

function App() {
  const [isAuth, setIsAuth] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
  if( localStorage.getItem('auth') ) {
    setIsAuth(true)
  }
  setIsLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }}>   
      <BrowserRouter basename="/json-placeholder-tester">
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;