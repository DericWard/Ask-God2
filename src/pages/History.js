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

//using useState to retrieve stored searches
function History() {
  const [storedValues, setStoredValues] = useState(() => {
    const stored = localStorage.getItem("storedValues");
    return stored ? JSON.parse(stored) : [];
  });

  //clear button function
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
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "10px",
            // add media query to add gap between buttons on mobile mode
            "@media (max-width: 600px)": {
              flexDirection: "column",
              gap: "10px",
            },
          }}
        >
          <Box sx={{ minHeight: "48px" }}>
            <DownloadPDF data={storedValues} />
          </Box>
          <Box sx={{ minHeight: "48px" }}>
            <Button
              variant="contained"
              onClick={handleClearClick}
              sx={{
                backgroundColor: "#2d7cb2",
                color: "white",
              }}
            >
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
              color: "#2D7CB2",
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
