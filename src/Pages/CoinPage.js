import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import {CryptoState} from '../CryptoContext'
import axios from "axios";
import { SingleCoin } from "../config/api";
import { makeStyles } from "mui-styles-hook";
import CoinInfo from '../Components/CoinInfo';
import { LinearProgress, Typography, Box } from '@mui/material';
import { numberWithCommas } from "../Components/CoinsTable";
import parse from "html-react-parser";

const CoinPage = () => {

  const { id } = useParams();
  const [coin,setCoin] = useState();

  const {currency, symbol, darkMode} = CryptoState();

  const fetchCoins = async() => {
    const {data} = await axios.get(SingleCoin(id));
    setCoin(data);
  }

  const useStyles = makeStyles((theme) => ({
    container: {
      display: "flex",
      backgroundColor: darkMode ? "#14161a" : "#fff",
      color: darkMode ? "#fff" : "#000",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        alignItems: "center",
      },
    },

    marketData: {
      alignSelf: "start",
      padding: 25,
      paddingTop: 10,
      width: "100%",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
      },
      [theme.breakpoints.down("sm")]: {
        flexDirection: "column",
        alignItems: "center",
      },
      [theme.breakpoints.down("xs")]: {
        alignItems: "start",
      },
    },
  }));

    const classes = useStyles();

  useEffect(() => {
    fetchCoins();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!coin) return <LinearProgress style={{ backgroundColor: "#3399ff" }} />;

  return (
    <div
      sx={classes.container}
      style={{ display: "flex", 
        backgroundColor: darkMode ? "#14161a" : "#ffffff",
        color: darkMode ? "#fff" : "#000", 
      }}
      className="graphcontainer"
    >
      <div className="sidebar">
        <img
          src={coin?.image.large}
          alt={coin?.name}
          height="200"
          style={{ marginBottom: 20 }}
        />
        <Typography
          variant="h3"
          sx={classes.heading}
          //heading
          style={{
            fontWeight: "bold",
            marginBottom: 20,
            textAlign: "center",
            fontFamily: "Montserrat",
          }}
        >
          {coin?.name}
        </Typography>
        <Typography
          variant="subtitle1"
          //description
          style={{
            width: "100%",
            fontFamily: "Montserrat",
            padding: 25,
            paddingBottom: 15,
            paddingTop: 0,
            textAlign: "justify",
          }}
        >
          {parse(coin?.description.en.split(". ")[0])}.
        </Typography>

        <div sx={classes.marketData} className="marketborder">
          <span style={{ display: "flex" }}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontFamily: "Montserrat",
              }}
            >
              Rank:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {numberWithCommas(coin?.market_cap_rank)}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontFamily: "Montserrat",
              }}
            >
              Current Price:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.current_price[currency.toLowerCase()]
              )}
            </Typography>
          </span>

          <span style={{ display: "flex" }}>
            <Typography
              variant="h5"
              style={{
                fontWeight: "bold",
                marginBottom: 20,
                fontFamily: "Montserrat",
              }}
            >
              Market Cap:
            </Typography>
            &nbsp; &nbsp;
            <Typography
              variant="h5"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {symbol}{" "}
              {numberWithCommas(
                coin?.market_data.market_cap[currency.toLowerCase()]
                  .toString()
                  .slice(0, -6)
              )}
              M
            </Typography>
          </span>
        </div>
      </div>
      <Box
        sx={{
          width: "1px",
          backgroundColor: darkMode ? "hsla(210, 14%, 28%, 0.3)" : "hsl(215, 15%, 92%)",
          height: "auto",
          margin: "0 20px",
        }}
      />
      <CoinInfo coin={coin} />
    </div>
  );
}

export default CoinPage