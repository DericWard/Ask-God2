import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { TextField } from "@mui/material";
import emailjs from "emailjs-com";
import soundFile from "../../sound.wav";

function ContactForm() {
  const [formData, setFormData] = useState({
    subject: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [audio, setAudio] = useState(null);

  useEffect(() => {
    setAudio(new Audio(soundFile));
  }, []);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const playSound = () => {
    if (audio) {
      audio.play();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_s2asnai",
        "template_mdi7wdf",
        formData,
        "5ql_RGoFGy766kBYx"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert(
            "Message sent successfully. The Divine will get back to you as soon as they're done answering some prayers!"
          );
          setFormData({
            subject: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            message: "",
          });
          playSound();
        },
        (error) => {
          console.log("FAILED...", error);
          alert("Message failed to send, you simple human you.");
        }
      );
  };

  return (
    <Box sx={{ flexGrow: 1, m: 1 }}>
      <Typography
        variant="h2"
        sx={{
          color: "lightblue",
          textAlign: "center",
          marginTop: "0px",
          marginBottom: "0px",
          fontFamily: "BigBlue",
          fontSize: { xs: "20vw", sm: "15vw", md: "13vw" }
        }}
      >
        CONTACT GOD!
      </Typography>
      <Card
        style={{
          maxWidth: 450,
          margin: "0 auto",
          padding: "20px 5px",
          justifyContent: "center",
          textAlign: "center",
          backgroundColor: "transparent",
        }}
      >
        <CardContent>
          <Typography
            gutterBotom
            color="secondary"
            variant="body2"
            component="p"
            style={{
              fontFamily: "arial",
              color: "white",
              backgroundColor: "#2d7cb2",
            }}
          >
            email:{" "}
            <a
              href="mailto:questions.askgod@gmail.com"
              style={{
                fontFamily: "arial",
                color: "#55B4E6",
              }}
            >
              questions.askgod@gmail.com
            </a>{" "}
            or simply fill out this form!
          </Typography>
          <br />
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  variant="outlined"
                  fullWidth
                  required
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  sx={{ "& .MuiInputLabel-root": { color: "#2d7cb2" }, 
                  // backgroundColor: "#FFFFFF",
                }}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  placeholder="Enter last name."
                  variant="outlined"
                  fullWidth
                  required
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  sx={{ "& .MuiInputLabel-root": { color: "#2d7cb2" },
                  // backgroundColor: "#FFFFFF",
                }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  label="Email"
                  placeholder="Enter email."
                  variant="outlined"
                  fullWidth
                  required
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  sx={{ "& .MuiInputLabel-root": { color: "#2d7cb2" },
                  // backgroundColor: "#FFFFFF",
                }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="subject"
                  label="Subject"
                  placeholder="Enter subject."
                  variant="outlined"
                  fullWidth
                  required
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  sx={{ "& .MuiInputLabel-root": { color: "#2d7cb2" },
                  // backgroundColor: "#FFFFFF",
                }}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  label="message"
                  multiline
                  rows={4}
                  placeholder="Type your message here."
                  variant="outlined"
                  fullWidth
                  required
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  sx={{ "& .MuiInputLabel-root": { color: "#2d7cb2" },
                  // backgroundColor: "#FFFFFF",
                }}
                />
              </Grid>
              <Grid xs={12} item>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  sx={{ bgcolor: "#2d7cb2" }}
                >
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default ContactForm;
