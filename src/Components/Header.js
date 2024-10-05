import "../App.css";
import React from "react";
import {
  AppBar,
  Container,
  MenuItem,
  Select,
  ThemeProvider,
  Toolbar,
  Typography,
  createTheme,
  FormControl,
  Box,
} from "@mui/material";
import { makeStyles } from "mui-styles-hook";
import { useNavigate } from "react-router";
import { CryptoState } from "../CryptoContext";

import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import NightsStayOutlinedIcon from "@mui/icons-material/NightsStayOutlined";
import IconButton from "@mui/material/IconButton";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "#3399ff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
  horizontalLine: (darkMode) => ({
    borderBottom: darkMode ? "1px solid hsla(210, 14%, 28%, 0.3)" : "1px solid hsl(215, 15%, 92%)",
    marginTop: 1,
    width: '100%',
  }),
});

const Header = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency, darkMode, toggleDarkMode  } = CryptoState();

  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#16171a" : "#ffffff",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <AppBar
        className="bg-blur"
        color="transparent"
        position="static"
        style={{
          justifyContent:'center',
        }}
      >
        <Container >
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              sx={styles.title}
              variant="h5"
            >
              Cryptorer
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                sx={{
                  width: 100,
                  height: 40,
                  marginRight: -5,
                  color: darkMode ? "#fff" : "#000",
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
              </Select>
            </FormControl>

            <IconButton onClick={toggleDarkMode} sx={{ color: "#3399ff" }}>
              {darkMode ? <WbSunnyOutlinedIcon sx={{ color: "#3399ff" }} /> : <NightsStayOutlinedIcon sx={{ color: "#3399ff" }} />}
          </IconButton>
          </Toolbar>
        </Container>
          <Box sx={styles.horizontalLine} />
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
