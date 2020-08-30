import React from "react";
import { Global, css } from "@emotion/core";
import { css as ssCSS } from "@styled-system/css";
import { ThemeProvider } from "emotion-theming";

const globalCSS = css`
  @font-face {
    font-family: "Fantasque";
    src: local("Fantasque Sans Mono Regular");
  }

  @font-face {
    font-family: "Fantasque";
    font-weight: 700;
    src: local("Fantasque Sans Mono Bold");
  }
`;

const theme = {
  fonts: {
    heading: "Fantasque",
    body: "Fantasque",
  },
  fontSizes: [".75rem", ".875rem", "1rem", "1.25rem", "1.5rem", "2rem"],
  fontWeights: ["regular", "bold"],
  colors: {
    link: ["#2F7DAC", "#4499CC"],
    shades: [
      "#000",
      "#222",
      "#444",
      "#555",
      "#666",
      "#888",
      "#999",
      "#CCC",
      "#DDD",
      "#FBFBFB",
    ],
  },
};

function Theme({ children }: React.PropsWithChildren<{}>) {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalCSS} />
      <div css={ssCSS({ fontFamily: "body", color: "link.0" })}>{children}</div>
    </ThemeProvider>
  );
}

export default Theme;
