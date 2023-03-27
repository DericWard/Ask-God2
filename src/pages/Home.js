/* eslint-disable */
import Sound from "../assets/sound.wav";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: "50vw",
    [theme.breakpoints.up("sm")]: {
      fontSize: "32vw",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "25vw",
    },
    [theme.breakpoints.up("lg")]: {
      fontSize: "15vw",
    },
  },
}));

function Home() {
  const playSound = () => {
    const audio = new Audio(Sound);
    audio.play();
  };

  useEffect(() => {
    playSound();
  }, []);

  const classes = useStyles();
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <div className="App">
      <header className="App-header"></header>
      <Link to="/ask" className='header-section AskGod'>
        <div className={`header-section AskGod ${classes.root}`}>
          <div className="Ask omfg" style={{ paddingTop: "0px" }}>
            ASK
          </div>
          <div className="God omfg" style={{ paddingTop: "0px" }}>
            GOD!
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Home;



