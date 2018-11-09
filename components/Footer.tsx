import * as React from "react";
import styled from "styled-components";
import { fontSize } from "../theme/helpers";
import { coolGrey, warmGrey, black, blue, red } from "../theme/colors";
import { Logo } from "./Logo";

type Theme = "cool" | "warm" | "neutral";

interface IFooter {
  client: string;
  presentation: string;
  date: string;
  theme: Theme;
}

const FooterContainer = styled.div`
  display: flex;
  font-size: ${fontSize(15)};
  position: absolute;
  bottom: 0;
  right: 5.4vw;
  height: 5.4vw;
  align-items: center;
  margin: 0;
  span {
    margin-right: 1em;
  }
  .client {
    font-weight: 600;
  }
  path {
    fill: currentColor;
  }
  .warm:not(.tint) & .client {
    color: ${red};
  }
  .warm & path {
    fill: ${warmGrey};
  }
  .cool:not(.tint) & .client {
    color: ${blue};
  }
  .cool & path {
    fill: ${coolGrey};
  }
`;

const FooterLogo = styled(Logo)`
  width: 32px;
  height: 5.4vw;
  margin-left: 0.5vw;
`;

export const Footer: React.SFC<IFooter> = ({
  client = "Client…",
  presentation = "Presentation title…",
  date = "Date…",
  theme = "neutral"
}) => {
  return (
    <FooterContainer theme={theme}>
      <span className="client">{client}</span>
      <span className="presentation">{presentation}</span>
      <span className="date">{date}</span>
      <FooterLogo />
    </FooterContainer>
  );
};
