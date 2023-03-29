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
      const questionLines = doc.splitTextToSize(
        `${index + 1}. ${question}`,
        180
      );
      const answerLines = doc.splitTextToSize(answer, 180);
      const lines = Math.max(questionLines.length, answerLines.length);

      // Add loop to check if current content exceeds current page height
      let currentY = y;
      for (let i = 0; i < lines; i++) {
        const questionLine = questionLines[i] || "";
        const answerLine = answerLines[i] || "";
        if (currentY + 10 > doc.internal.pageSize.getHeight()) {
          doc.addPage();
          currentY = 10;
        }
        doc.text(questionLine, 10, currentY);
        doc.text(answerLine, 20, currentY + 5);
        currentY += 10;
      }
      y = currentY;
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
