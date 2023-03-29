import React from "react";
import  Button  from "@mui/material/Button";
import { jsPDF } from "jspdf";

function DownloadPDF({ data }) {
  const generatePDF = () => {
    const doc = new jsPDF();

    data.forEach(({ question, answer }, index) => {
      doc.text(`${index + 1}. ${question}`, 10, 10 + index * 30);
      doc.text(answer, 20, 15 + index * 30);
    });
    

    doc.save("history.pdf");
  };

  return (
    <div style={{ display: "flex", justifyContent: "center"}}>
      <Button variant="contained" onClick={generatePDF} sx={{backgroundColor: "#2d7cb2",}}>
        Download Your Chats with God!
      </Button>
    </div>

  );
}

export default DownloadPDF;
