import * as React from "react";
import styled from "styled-components";
import { ISlide, ITemplate } from "../components/Slide";
import { fontSize, font } from "../theme/helpers";
import { Root, BaseBox } from "./common";

const Box = styled(BaseBox)`
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  p {
    font-size: ${fontSize(20)};
  }
  blockquote {
    position: absolute;
    top: 0;
    right: 13vw;
    height: 100vh;
    width: 37vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
  }
  blockquote p {
    font-size: ${fontSize(40)};
    font-family: ${font("Medium")};
    line-height: 1.4;
  }
`;

export default (props: ISlide) => ({ children }: ITemplate) => {
  return (
    <Root {...props}>
      <Box dir="column" width={0.5} pr="8.5vw">
        {children}
      </Box>
    </Root>
  );
};
