import * as React from "react";
import styled from "styled-components";
import SuperBox from "superbox";
import { ISlide, slideStyle } from "../components/Slide";
import { red, blue } from "../theme/colors";
import { font, fontSize } from "../theme/helpers";

interface IRootBase {
  background: string;
  [index: string]: any;
}

export const RootBase = styled<IRootBase>(SuperBox)`
  position: relative;
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding: 5.4vw;
  background-size: cover;
  background-position: center center;
  &:before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${({ style }) => style && style.backgroundImage};
    background-position: center center;
    background-size: cover;
  }
`;

interface IRoot extends ISlide {
  className?: string;
  style?: React.CSSProperties;
  children?: any;
  [index: string]: any;
}

export const Root: React.SFC<IRoot> = ({
  style,
  className = "",
  children,
  theme = "neutral",
  backgroundColor = "white",
  image,
  ...props
}) => {
  const { background, foreground, backgroundImage } = slideStyle(
    backgroundColor,
    theme,
    image
  );
  return (
    <RootBase
      bg={background}
      color={foreground}
      className={`${className} ${theme} ${backgroundColor}`}
      style={{ ...style, backgroundImage }}
      {...props}
    >
      {children}
    </RootBase>
  );
};

interface IBox {
  dir: string;
  highlight: string;
  [index: string]: any;
}

export const BaseBox = styled<IBox>(SuperBox)`
  display: flex;
  flex-direction: ${({ dir }) => dir || "row"};
  z-index: 2;
  h1 {
    font-size: ${fontSize(50)};
    font-family: ${font("Medium")};
  }
  .warm:not(.tint) & h1 {
    color: ${red};
  }
  .cool:not(.tint) & h1 {
    color: ${blue};
  }
  h2 {
    font-size: ${fontSize(35)};
    margin-bottom: 1em;
  }
  h3 {
    font-size: ${fontSize(25)};
  }
  p {
    font-size: ${fontSize(35)};
    margin: 0.5em 0 0;
  }
`;
