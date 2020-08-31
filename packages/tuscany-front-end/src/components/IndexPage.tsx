import React from "react";
import { Category } from "@mindfulstudio/tuscany-types/Category";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

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
        color: "link.1",
        borderColor: "link.1",
        textDecoration: "none",
        paddingX: 3,
        paddingY: 3,
        borderRadius: 2,
        "&:not(:last-of-type)": {
          marginBottom: 1,
        },

        "&:hover": {
          color: "link.0",
          borderColor: "link.0",
        },
      })}
    >
      {name}
    </a>
  );
}

function IndexPage({ categories }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        {categories.map((c) => (
          <CategoryTile key={c.name} name={c.name} url={c.name} />
        ))}
      </Container>
    </Layout>
  );
}

export default IndexPage;
