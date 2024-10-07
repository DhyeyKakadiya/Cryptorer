import React, { useEffect, useState } from "react";
import { CryptoState } from "../CryptoContext";
import { HistoricalChart } from "../config/api";
import axios from "axios";
import { CircularProgress, ThemeProvider, createTheme } from "@mui/material";
import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import SelectButton from "./SelectButton";
import { chartDays } from "../config/data";

Chart.register(CategoryScale);

const CoinInfo = ({ coin }) => {
  const [historicData, setHistoricData] = useState([]);
  const [days, setDays] = useState(1);
  const { currency, darkMode } = CryptoState();
  const [flag, setflag] = useState(false);
 
  const fetchHistoricData = async () => {
    const { data } = await axios.get(HistoricalChart(coin.id, days, currency));
    setflag(true);
    setHistoricData(data.prices);
  };

  useEffect(() => {
    fetchHistoricData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency, days]);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <div
      className='graph'
      style={{
        backgroundColor: darkMode ? "#14161a" : "#fff",
        color: darkMode ? "#fff" : "#000",
      }}
      >
        {!historicData | (flag === false) ? (
          <CircularProgress
            style={{ color: "#3399ff" }}
            size={100}
            thickness={1}
          />
        ) : (
          <>
            <Line
              data={{
                labels: historicData?.map((coin) => {
                  let date = new Date(coin[0]);
                  let time =
                    date.getHours() > 12
                      ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                      : `${date.getHours()}:${date.getMinutes()} AM`;
                  return days === 1 ? time : date.toLocaleDateString();
                }),
                datasets: [
                  {
                    data: historicData.map((coin) => coin[1]),
                    label: `Price ( Past ${days} Days ) in ${currency}`,
                    borderColor: "#3399ff",
                  },
                ],
              }}
              options={{
                elements: {
                  point: {
                    radius: 1,
                  },
                },
              }}
            />
            <div
              style={{
                display: "flex",
                marginTop: 20,
                justifyContent: "space-around",
                width: "100%",
              }}
            >
              {chartDays.map((day) => (
                <SelectButton
                  key={day.value}
                  onClick={() => {
                    setDays(day.value);
                    setflag(false);
                  }}
                  selected={day.value === days}
                >
                  {day.label}
                </SelectButton>
              ))}
            </div>
          </>
        )}
      </div>
    </ThemeProvider>
  );
};

export default CoinInfo;
