import * as React from "react";
import styled from "styled-components";
import { ISlide, ITemplate } from "../components/Slide";
import { Wordmark } from "../components/Wordmark";
import { Root, BaseBox } from "./common";

export const Box = styled(BaseBox)`
  h1 {
    color: currentColor !important;
  }
  &:first-child {
    align-items: flex-start;
    justify-content: flex-end;
    text-align: left;
  }
  &:nth-child(2) {
    align-items: flex-end;
    justify-content: center;
    height: 50%;
  }
`;

export default (props: ISlide) => ({ children }: ITemplate) => {
  return (
    <Root {...props} p="7.8125vw">
      <Box dir="column" width={0.5}>
        {children}
      </Box>
      <Box dir="column" width={0.5}>
        <Wordmark width="22.24vw" height="3.9vw" />
      </Box>
    </Root>
  );
};
