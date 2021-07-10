import React from "react";
import css from "@styled-system/css";

function Container({ children }: React.PropsWithChildren<{}>) {
  return (
    <div
      css={css({
        maxWidth: "460px",
        margin: "auto",
      })}
    >
      {children}
    </div>
  );
}

export default Container;
