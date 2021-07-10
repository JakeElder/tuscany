import React from "react";
import Header from "./Header";
import Container from "./Container";
import { Category } from "@mindfulstudio/tuscany-types/Category";
import { css } from "@styled-system/css";
import styled from "@emotion/styled";

export type Props = {
  categories: Pick<Category, "name">[];
};

function CategoryTile({ name, url }: Pick<Category, "name"> & { url: string }) {
  return (
    <a
      href={url}
      css={css({
        display: "block",
        border: "1px dashed",
        color: "link.0",
        borderColor: "link.1",
        textDecoration: "none",
        paddingX: 3,
        paddingY: 3,
        borderRadius: 2,
        marginBottom: 1,
      })}
    >
      {name}
    </a>
  );
}

const H3 = styled.div`
  ${(props) => {
    console.log(props);
    return {};
  }}
`;

function IndexPage({ categories }: Props) {
  return (
    <Container>
      <H3>a</H3>
      <Header />
      {categories.map((c) => (
        <CategoryTile key={c.name} name={c.name} url={c.name} />
      ))}
    </Container>
  );
}

export default IndexPage;
