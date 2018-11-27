// Example theme.js
import { dark } from "mdx-deck/themes";
import { white, black } from "./colors";
import { Provider } from "./provider";
import { fontSize } from "./helpers";
import okaidia from "react-syntax-highlighter/styles/prism/okaidia";

export default {
  // extends the default theme
  ...dark,
  prism: {
    style: okaidia
  },
  // add a custom font
  font: "EuclidCircularB-Regular, sans-serif",
  heading: {
    fontWeight: 300,
    margin: 0,
    lineHeight: 1.4
  },
  // // custom colors
  colors: {
    text: white,
    background: black,
    link: white
  },
  css: {
    ul: {
      paddingLeft: "0"
    },
    li: {
      listStyleType: "none",
      fontSize: "1em",
      marginBottom: "0.5em",
      paddingLeft: "1.5em",
      lineHeight: "1.5em",
      position: "relative",
      "&:before": {
        position: "absolute",
        content: "'🚀'",
        paddingRight: "0.25em",
        fontSize: "1.2em",
        left: "0",
        marginTop: "0.1em"
      }
    },
    pre: {
      width: "75vw"
    }
  },
  Provider
};
