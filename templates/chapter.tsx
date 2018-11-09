import * as React from "react";
import styled from "styled-components";
import { ISlide, ITemplate } from "../components/Slide";
import { Root, BaseBox } from "./common";

const Box = styled(BaseBox)`
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  h1 {
    margin-bottom: 0.2em;
  }
`;

export default (props: ISlide) => ({ children }: ITemplate) => {
  return (
    <Root {...props}>
      <Box dir="column" width={0.55}>
        {children}
      </Box>
    </Root>
  );
};
