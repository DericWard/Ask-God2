import React from "react";
import Button from "@mui/material/Button";
import { jsPDF } from "jspdf";

function DownloadPDF({ data }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    let y = 10;
    data.forEach(({ question, answer }, index) => {
      if (index === 1) {
        y += 10; // Add extra space after first question
        doc.line(10, y, 200, y); // Draw horizontal line
        y += 10; // Add extra space after line
      }
      const questionLines = doc.splitTextToSize(`${index + 1}. ${question}`, 180);
      const answerLines = doc.splitTextToSize(answer, 180);
      const lines = Math.max(questionLines.length, answerLines.length);
      
      // Check if current content exceeds current page height
      const pageHeight = doc.internal.pageSize.getHeight();
      if (y + lines * 10 > pageHeight) {
        doc.addPage();
        y = 10;
      }

      for (let i = 0; i < lines; i++) {
        const questionLine = questionLines[i] || '';
        const answerLine = answerLines[i] || '';
        doc.text(questionLine, 10, y);
        doc.text(answerLine, 20, y + 5);
        y += 10;
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
