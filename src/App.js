import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Homepage from "./Pages/Homepage";
import CoinPage from "./Pages/CoinPage";
import { CryptoState } from "./CryptoContext"; // Import the context
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const { darkMode } = CryptoState();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <div className="wrapper"  style={{backgroundColor: darkMode ? "#14161a" : "#ffffff"}}>
          <Header />
          <Routes>
            <Route path="/" Component={Homepage} exact />
            <Route path="/coins/:id" Component={CoinPage} />
          </Routes>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
