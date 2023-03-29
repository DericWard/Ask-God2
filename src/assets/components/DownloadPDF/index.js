import React from "react";
import Button from "@mui/material/Button";
import { jsPDF } from "jspdf";
import { useState } from "react";

function DownloadPDF({ data }) {
  const [y, setY] = useState(10);

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;

    data.map(({ question, answer }, index) => {
      // Check if content exceeds current page height
      const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, 150);
      const answerLines = doc.splitTextToSize(answer, 150);
      const lines = Math.max(questionLines.length, answerLines.length);
      const contentHeight = lines * 10;
      if (y + contentHeight > pageHeight - 10) {
        doc.addPage();
        setY(10);
      }

      // Add space between each question-answer pair
      if (index > 0) {
        setY(y + 10);
      }

      // Format and render question-answer pair
      for (let i = 0; i < lines; i++) {
        const questionLine = questionLines[i] || '';
        const answerLine = answerLines[i] || '';
        doc.text(questionLine, 10, y);
        doc.text(answerLine, 20, y + 5);
        setY(y + 10);
      }
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
