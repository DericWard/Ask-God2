import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function History() {
  const [storedValues, setStoredValues] = useState(() => {
    const stored = localStorage.getItem("storedValues");
    return stored ? JSON.parse(stored) : [];
  });

  return (
    <div>
      {storedValues.map((storedValue, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{storedValue.question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{storedValue.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}

export default History;
