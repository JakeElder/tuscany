import React from "react";
import { css } from "@styled-system/css";

function Header() {
  return (
    <div
      css={css({
        fontFamily: "heading",
      })}
    >
      <h1 css={css({ fontSize: 5, marginBottom: 1 })}>chiangdao.guide</h1>
      <h2
        css={css({
          marginBottom: 3,
        })}
      >
        By Dek Doi
      </h2>
    </div>
  );
}

export default Header;
