import * as React from "react";
import styled from "styled-components";
import { ISlide, ITemplate } from "../components/Slide";
import { fontSize } from "../theme/helpers";
import { Root, BaseBox } from "./common";

const HalfRoot = styled(Root)`
  flex-direction: row-reverse;
  &:before {
    width: 50vw;
  }
`;

const Box = styled(BaseBox)`
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0 0 0 5.4vw;
  text-align: left;
  h1 {
    margin-bottom: 0.2em;
  }
  p {
    font-size: ${fontSize(20)};
  }
`;

export default (props: ISlide) => ({ children }: ITemplate) => {
  return (
    <HalfRoot {...props}>
      <Box dir="column" width={0.5} pr="8.5vw">
        {children}
      </Box>
    </HalfRoot>
  );
};
