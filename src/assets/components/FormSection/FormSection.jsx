import { useState } from "react";
import Button from "@mui/material/Button";

const FormSection = ({ generateResponse }) => {
  const [newQuestion, setNewQuestion] = useState("");

  return (
    <div
      className="form-section"
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#fff",
          borderRadius: "10px",
          padding: "20px",
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          width: "400px",
        }}
      >
        <textarea
          rows="20"
          className="form-control"
          placeholder="Ask God anything..."
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            borderRadius: "10px",
            paddingTop: "10px",
            fontFamily: "tahoma",
            width: "100%",
          }}
          value={newQuestion}
          onChange={(event) => setNewQuestion(event.target.value)}

        ></textarea>

        

        <Button
          className="btn"
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          Ask Now
        </Button>
      </div>
    </div>
  );
};

export default FormSection;
