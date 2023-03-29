/* eslint-disable */
import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadPDF from "../assets/components/DownloadPDF";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

function History() {
  const [storedValues, setStoredValues] = useState(() => {
    const stored = localStorage.getItem("storedValues");
    return stored ? JSON.parse(stored) : [];
  });

  const handleClearClick = () => {
    localStorage.removeItem("storedValues");
    setStoredValues([]);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        m: 10,
        marginTop: "50px",
        maxWidth: "60%",
        margin: "auto",
      }}
    >
      <Typography
        className="omfg"
        variant="h2"
        style={{
          color: "lightblue",
          textAlign: "center",
          marginTop: "-50px",
          marginBottom: "0px",
          fontFamily: "BigBlue",
          fontSize: "17vw",
        }}
      >
        Save God!
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <Box>
            <DownloadPDF data={storedValues} />
          </Box>
          <Box>
            <Button variant="contained" onClick={handleClearClick} sx={{backgroundColor: "#2d7cb2", color: "white"}}>
              Clear History
            </Button>
          </Box>
        </Box>
        {storedValues.map(({ question, answer }, index) => (
          <Accordion
            key={index}
            sx={{
              backgroundColor: "#66000000",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
}

export default History;
