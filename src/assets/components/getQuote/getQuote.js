/* eslint-disable */
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Box, Paper, Typography } from "@mui/material";

// API call component for random quotes

function GetQuote() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      axios
        .get("https://api.quotable.io/random?author=albert-einstein")
        .then((response) => {
          setQuote(`${response.data.content}`);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // width: "60vw",
        marginTop: "140px",
        // opacity: "0.5"
      }}
    >
      <Paper sx={{ backgroundColor: "#66000000", boxShadow: "none", minWidth: "100%" }}>
        <Typography
          sx={{
            fontSize: 20,
            textAlign: "center",
            color: "rgb(45, 124, 178)",
            fontStyle: "italic",
            whiteSpace: "pre-wrap",
            overflow: "visible",
            animation: "slideRightToLeft 15s linear infinite",
            width: "100%",
            display: "inline-block",
          }}
          variant="h3"
        >
          {quote}
        </Typography>
      </Paper>
      {/* <style>
        {`
          @keyframes slideRightToLeft {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `}
      </style> */}
    </Box>
  );
}

export default GetQuote;
