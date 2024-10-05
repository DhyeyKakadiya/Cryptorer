import React from "react";
import { makeStyles } from "mui-styles-hook";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";
import { CryptoState } from "../../CryptoContext";

const useStyles = makeStyles((theme) => ({
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    color: theme.palette.mode === "dark" ? "#fff" : "#000",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
}));

const Banner = () => {
  const styles = useStyles();
  const { darkMode } = CryptoState(); // Get darkMode from context

  return (
    <div className="bg" style={{background: darkMode
      ? "linear-gradient(181deg, rgb(2, 0, 97) 15%, rgb(97, 149, 219) 158.5%)"
      : "linear-gradient(181deg, rgb(255, 255, 255) 15%, rgb(200, 220, 255) 158.5%)"
      }}>
      <Container sx={styles.bannerContent}>
        <div sx={styles.tagline}>
          <Typography
            className="tag"
            variant="h2"
            style={{
              paddingTop: 0,
              textAlign: "center",
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              color: darkMode ? "#fff" : "#000",
            }}
          >
            Cryptorer
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              textAlign: "center",
              color: darkMode ? "lightgrey" : "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
            }}
          >
            Get all comprehensive info about your preferred cryptocurrency.
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
};

export default Banner;
