import { useState } from "react";
import { Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import DownloadPDF from "../assets/components/DownloadPDF";

function History() {
  const [storedValues, setStoredValues] = useState(() => {
    const stored = localStorage.getItem("storedValues");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div>
      {storedValues.map(({ question, answer }, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
      <DownloadPDF data={storedValues} />
    </div>
  );
}

export default History;
