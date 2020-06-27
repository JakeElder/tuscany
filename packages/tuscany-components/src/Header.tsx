import React from "react";

type Props = {
  children: string;
};

const Header: React.FC<Props> = ({ children }) => {
  return <h1>{children}</h1>;
};

export default Header;
