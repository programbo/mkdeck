import * as React from "react";
import { Head } from "mdx-deck";
const { alias } = require("../now.json");
const { title, name, version, description } = require("../package.json");

interface IProvider {
  children: Element | Element[];
}

export const Provider: React.SFC<IProvider> = ({ children }) => {
  return (
    <div>
      <Head>
        <meta property="og:url" content={`https://${alias}`} />
        <meta property="og:image" content={`https://${alias}/card.png`} />
        <meta property="og:title" content={`${title || name} (v${version})`} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <link
          rel="icon"
          type="image/png"
          href="https://meerkats.com.au/static/favicons/favicon-196x196.png"
          sizes="196x196"
        />
        <script src="https://www.puck-js.com/puck.js" />
      </Head>
      <link rel="stylesheet" href="../assets/fonts/euclid.css" />
      {children}
    </div>
  );
};
