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
  FormHelperText,
  FormControl,
} from "@mui/material";
import { makeStyles } from "mui-styles-hook";
import { useNavigate } from "react-router";
import { CryptoState } from "../CryptoContext";

const useStyles = makeStyles({
  title: {
    flex: 1,
    color: "#3399ff",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
});

const Header = () => {
  const styles = useStyles();
  const navigate = useNavigate();

  const { currency, setCurrency } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar
        className="bg-blur"
        color="transparent"
        position="static"
      >
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              sx={styles.title}
              variant="h6"
            >
              Cryptorer
            </Typography>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <Select
                sx={{
                  width: 100,
                  height: 40,
                  marginRight: -5,
                }}
                value={currency}
                onChange={(e) => setCurrency(e.target.value)}
              >
                <MenuItem value={"INR"}>INR</MenuItem>
                <MenuItem value={"USD"}>USD</MenuItem>
              </Select>
              <FormHelperText style={{ paddingLeft: "10px" }}>
                Currency
              </FormHelperText>
            </FormControl>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
