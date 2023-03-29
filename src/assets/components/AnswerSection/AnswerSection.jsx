import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box } from "@mui/system";

const AnswerSection = ({ storedValues }) => {
  return (
    // Create a Box container
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {/* container Accordion */}
      <div className="answer-container">
        {/* Map through the storedValues array to create an Accordion for each value */}
        {storedValues.map((value, index) => (
          <Accordion
            key={index}
            sx={{ marginTop: "10px", marginBottom: "10px", width: "50vw", backgroundColor: "#66000000" }}
          >

              // Define the expand icon as ExpandMoreIcon

            <AccordionSummary sx={{marginTop: "20px", color: "#2D7CB2"}}

              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              {/* component with the question as content */}
              <Typography variant="body2">{value.question}</Typography>
            </AccordionSummary>
            {/* AccordionDetails containing the answer */}
            <AccordionDetails>
              {/* component with the answer as content */}
              <Typography variant="body1">{value.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
};

export default AnswerSection;
