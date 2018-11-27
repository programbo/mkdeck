import * as React from "react";
import styled from "styled-components";
import { ISlide, ITemplate } from "../components/Slide";
import { fontSize, font } from "../theme/helpers";
import { Root, BaseBox } from "./common";

const Box = styled(BaseBox)`
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  h1 {
    font-size: ${fontSize(120)};
    font-family: ${font("Medium")};
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

// export default ({ children }: any) => {
//   return <div>{children}</div>;
// };
