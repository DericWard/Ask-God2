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


function History() {
  const [storedValues, setStoredValues] = useState(() => {
    const stored = localStorage.getItem("storedValues");
    return stored ? JSON.parse(stored) : [];
  });

  return (

    <Box sx={{ flexGrow: 1, m: 10, marginTop: "50px", maxWidth: "60%", margin: "auto"}}>
            <Typography className="omfg"
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
    <div>
      {storedValues.map(({ question, answer }, index) => (
        <Accordion key={index} >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails >
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
        
      ))}
      <DownloadPDF data={storedValues} />
    </div>
    </Box>
  );
}

export default History;
