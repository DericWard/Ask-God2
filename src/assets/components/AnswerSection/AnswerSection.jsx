import { Card, CardContent, Typography, Box } from "@mui/material";

const AnswerSection = ({ storedValues }) => {
  return (
    <>
      <div className="answer-container">
        {storedValues.map((value, index) => {
          return (
            <Box sx={{ display: "flex", justifyContent: "center"}}>
              <Card key={index} sx={{ flexGrow: 1, m: 1, minWidth: "300px", backgroundColor: "transparent"  }}>
                <CardContent>
                  <Typography variant="body2" component="p">
                    {value.question}
                  </Typography>
                  <Typography variant="h5" component="h2">
                    {value.answer}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </div>
    </>
  );
};

export default AnswerSection;
