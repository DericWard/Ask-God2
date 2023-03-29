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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <div className="answer-container">
        {storedValues.map((value, index) => (
          <Accordion
            key={index}
            sx={{ marginTop: "10px", marginBottom: "10px", width: "50vw", backgroundColor: "#66000000" }}
          >
            <AccordionSummary sx={{marginTop: "20px"}}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="body2">{value.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1">{value.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </div>
    </Box>
  );
};

export default AnswerSection;
