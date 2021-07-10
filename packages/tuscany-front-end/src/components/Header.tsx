import React from "react";
import Link from "next/link";
import { css } from "@styled-system/css";

function Header() {
  return (
    <div
      css={css({
        fontFamily: "heading",
      })}
    >
      <h1 css={css({ fontSize: 5, marginBottom: 1 })}>
        <Link href="/" passHref>
          <a
            css={css({
              cursor: "pointer",
              textDecoration: "none",
              color: "inherit",
            })}
          >
            chiangdao.guide
          </a>
        </Link>
      </h1>
      <h2
        css={css({
          marginBottom: 3,
          color: "shades.5",
        })}
      >
        By Dek Doi
      </h2>
    </div>
  );
}

export default Header;
