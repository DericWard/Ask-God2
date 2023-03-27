import React from "react";
import { saveAs } from "file-saver";
import { Button } from "@mui/material";
import { jsPDF } from "jspdf";

function DownloadPDF({ data }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    data.forEach(({ question, answer }, index) => {
      doc.text(`${index + 1}. ${question}`, 10, 10 + index * 20);
      doc.text(answer, 20, 15 + index * 20);
    });

    doc.save("history.pdf");
  };

  return (
    <Button variant="contained" onClick={generatePDF}>
      Download PDF
    </Button>
  );
}

export default DownloadPDF;
