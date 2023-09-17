import React from "react";
import { makeStyles } from "mui-styles-hook";
import { Container, Typography } from "@mui/material";
import Carousel from "./Carousel";

const useStyles = makeStyles({
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
});

const Banner = () => {
  const styles = useStyles();

  return (
    <div className="bg">
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
            }}
          >
            Cryptorer
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              textAlign: "center",

              color: "darkgrey",
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
