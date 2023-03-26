import { Configuration, OpenAIApi } from "openai";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import FormSection from "../assets/components/FormSection/FormSection.jsx";
import AnswerSection from "../assets/components/AnswerSection/AnswerSection.jsx";
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
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box sx={{ flexGrow: 1, m: 1, maxWidth: "200px" }}>
        <div className="header-section">
          <Typography
            variant="h2"
            style={{
              color: "lightblue",
              textAlign: "center",
              marginTop: "50px",
              marginBottom: "10px",
            }}
          >
            ASK GOD!
          </Typography>

          <FormSection generateResponse={generateResponse} />

          <AnswerSection storedValues={storedValues} />
        </div>
      </Box>
    </Box>
  );
};

export default Ask;
