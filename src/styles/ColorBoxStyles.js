import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  ColorBox: {
    width: "20%",
    height: (props) => (props.showingFullPalette ? "25%" : "50%"),
    margin: "0",
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    marginBottom: "-4px",
    "&:hover button": {
      opacity: "1",
    },
    "@media (max-width: 900px)": {
      width: "50%",
    },
    "@media (max-width: 500px)": {
      width: "100%",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: (props) => (props.showingFullPalette ? "20%" : "33.3333%"),
    },
    [sizes.down("md")]: {
      width: "50%",
      height: (props) => (props.showingFullPalette ? "10%" : "20%"),
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: (props) => (props.showingFullPalette ? "5%" : "10%"),
    },
  },
  copyText: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
  },
  colorName: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
  },
  seeMore: {
    color: (props) =>
      chroma(props.background).luminance() <= 0.08 ? "white" : "black",
    background: "rgba(255, 255, 255, 0.3)",
    position: "absolute",
    border: "none",
    right: "0px",
    bottom: "0",
    width: "60px",
    height: "30px",
    textAlign: "center",
    lineHeight: "30px",
    textTransform: "uppercase",
  },
  copyButton: {
    color: (props) =>
      chroma(props.background).luminance() >= 0.7 ? "black" : "white",
    width: "100px",
    height: "30px",
    position: "absolute",
    display: "inline-block",
    top: "50%",
    left: "50%",
    marginLeft: "-50px",
    marginTop: "-15px",
    textAlign: "center",
    outline: "none",
    background: "rgba(255, 255, 255, 0.3)",
    fontSize: "1rem",
    lineHeight: "30px",
    border: "none",
    textTransform: "uppercase",
    textDecoration: "none",
    opacity: "0",
  },
  boxContent: {
    position: "absolute",
    width: "100%",
    padding: "10px",
    left: "0px",
    bottom: "0px",
    color: "black",
    textTransform: "uppercase",
    letterSpacing: "1px",
    fontSize: "12px",
  },
  copyOverlay: {
    opacity: "0",
    zIndex: "0",
    width: "100%",
    height: "100%",
    transition: "transform 0.6s ease-in-out",
    transform: "scale(0.1)",
  },
  showOverlay: {
    opacity: "1",
    transform: "scale(50)",
    zIndex: "10",
    position: "absolute",
  },
  copyMessage: {
    position: "fixed",
    top: "0",
    left: "0",
    bottom: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "4rem",
    transform: "scale(0.1)",
    opacity: "0",
    color: "white",
    "& h1": {
      fontWeight: "400",
      textShadow: "1px 2px black",
      width: "100%",
      background: "rgba(255, 255, 255, 0.2)",
      textAlign: "center",
      marginBottom: "0",
      padding: "1rem",
      textTransform: "uppercase",
      [sizes.down("xs")]: {
        fontSize: "5rem",
      },
    },
    "& p": {
      fontSize: "2rem",
      fontWeight: "100",
    },
  },
  showMessage: {
    opacity: "1",
    zIndex: "25",
    transform: "scale(1)",
    transition: "all 0.4s ease-in-out",
    transitionDelay: "0.3s",
  },
};

export default styles;
