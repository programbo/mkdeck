import * as React from "react";
import styled from "styled-components";
import { ISlide, ITemplate } from "../components/Slide";
import { fontSize, font } from "../theme/helpers";
import { Root, BaseBox } from "./common";

const Box = styled(BaseBox)`
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  h1,
  h2 {
    position: absolute;
    top: 5.4vw;
    left: 5.4vw;
  }
  h2 {
    top: 9.4vw;
    left: 5.5vw;
  }
  p {
    font-size: ${fontSize(40)};
    font-family: ${font("Medium")};
    line-height: 1.4;
  }
`;

export default (props: ISlide) => ({ children }: ITemplate) => {
  return (
    <Root {...props}>
      <Box dir="column" width={1} pl="14.5vw" pr="14.5vw">
        {children}
      </Box>
    </Root>
  );
};
