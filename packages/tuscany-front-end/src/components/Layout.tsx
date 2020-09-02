import React from "react";
import { css } from "@styled-system/css";

function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      css={css({
        paddingY: 4,
        paddingX: "20px",
      })}
    >
      {children}
    </div>
  );
}

export default Layout;
