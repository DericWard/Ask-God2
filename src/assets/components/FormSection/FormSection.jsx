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
          color: "#2d7cb2",
          width: "400px",
          backgroundColor: "transparent",
        }}
      >
        <textarea
          rows="10"
          className="form-control"
          placeholder="Ask God anything..."
          style={{
            textAlign: "center",
            verticalAlign: "middle",
            borderRadius: "10px",
            paddingTop: "10px",
            fontSize: "20px",
            fontFamily: "tahoma",
            width: "30vw",
            backgroundColor: "transparent"
          }}
          value={newQuestion}
          onChange={(event) => setNewQuestion(event.target.value)}

        ></textarea>

        

        <Button
          className="btn"
          style={{ fontSize: "18px"}}
          onClick={() => generateResponse(newQuestion, setNewQuestion)}
        >
          Ask Now
        </Button>
      </div>
    </div>
  );
};

export default FormSection;
