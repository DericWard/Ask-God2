import { Configuration, OpenAIApi } from "openai";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FormSection from "../assets/components/FormSection/FormSection.jsx";
import AnswerSection from "../assets/components/AnswerSection/AnswerSection.jsx";
import GetQuote from "../assets/components/getQuote/getQuote.js";
import { useState, useEffect } from "react";

const Ask = () => {
  const configuration = new Configuration({
    apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  });

  const openai = new OpenAIApi(configuration);

  const [storedValues, setStoredValues] = useState([]);

  useEffect(() => {
    const storedValues = JSON.parse(
      localStorage.getItem("storedValues") || "[]"
    );
    setStoredValues(storedValues);
  }, []);

  const generateResponse = async (newQuestion, setNewQuestion) => {
    let options = {
      model: "text-davinci-003",
      temperature: 0,
      max_tokens: 100,
      top_p: 1,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: ["/"],
    };

    let completeOptions = {
      ...options,
      prompt: newQuestion,
    };

    const response = await openai.createCompletion(completeOptions);

    console.log(response.data.choices[0].text);

    if (response.data.choices) {
      const newStoredValues = [
        {
          question: newQuestion,
          answer: response.data.choices[0].text,
        },
        ...storedValues,
      ];

      setStoredValues(newStoredValues);
      setNewQuestion("");

      localStorage.setItem("storedValues", JSON.stringify(newStoredValues));
    }
  };

  return (
    <>
    <Typography className="omfg"
    variant="h2"
    style={{
      color: "lightblue",
      textAlign: "center",
      marginTop: "-50px",
      marginBottom: "0px",
      fontFamily: "BigBlue",
      fontSize: "18vw",
    }}
  >
    Ask God!
  </Typography>

  
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ flexGrow: 1, m: 10, maxWidth: "60vw", paddingTop: "0px" }}>
        <div className="header-section">
          

          <FormSection generateResponse={generateResponse} />

          <AnswerSection storedValues={storedValues} />
        </div>
          <GetQuote />
      </Box>
    </Box>
    </>
    
  );
};

export default Ask;
