import React from "react";
import Button from "@mui/material/Button";
import { jsPDF } from "jspdf";

function DownloadPDF({ data }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    let y = 10;
    const formattedData = data.map(({ question, answer }, index) => {
      const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, 180);
      const answerLines = doc.splitTextToSize(answer, 180);
      const lines = Math.max(questionLines.length, answerLines.length);
      const formattedLines = [];
      for (let i = 0; i < lines; i++) {
        const questionLine = questionLines[i] || '';
        const answerLine = answerLines[i] || '';
        formattedLines.push({ questionLine, answerLine });
      }
      return formattedLines;
    });

    formattedData.forEach(lines => {
      lines.forEach(({ questionLine, answerLine }) => {
        doc.text(questionLine, 10, y);
        doc.text(answerLine, 20, y + 5);
        y += 10;
      });
    });

    doc.save("history.pdf");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Button
        variant="contained"
        onClick={generatePDF}
        sx={{ backgroundColor: "#2d7cb2" }}
      >
        Download Chats
      </Button>
    </div>
  );
}

export default DownloadPDF;
