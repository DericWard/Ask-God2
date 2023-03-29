import React from "react";
import Button from "@mui/material/Button";
import { jsPDF } from "jspdf";
import { useState } from "react";

function DownloadPDF({ data }) {
  const [y, setY] = useState(10);

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageHeight = doc.internal.pageSize.height;

    let newY = y; // use a local variable to track the current y position

    data.map(({ question, answer }, index) => {
      // Check if content exceeds current page height
      const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, 180);
      const answerLines = doc.splitTextToSize(answer, 180);
      const lines = Math.max(questionLines.length, answerLines.length);
      const contentHeight = lines * 10;
      if (newY + contentHeight > pageHeight - 10) {
        doc.addPage();
        newY = 10; // reset the local variable when a new page is added
      }

      // Add space between each question-answer pair
      if (index > 0) {
        newY += 10; // increment the local variable, not the state variable
      }

      // Format and render question-answer pair
      for (let i = 0; i < lines; i++) {
        const questionLine = questionLines[i] || '';
        const answerLine = answerLines[i] || '';
        doc.text(questionLine, 10, newY);
        doc.text(answerLine, 20, newY + 5);
        newY += 10; // increment the local variable, not the state variable
      }
    });

    setY(newY); // update the state variable after the loop is finished
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
