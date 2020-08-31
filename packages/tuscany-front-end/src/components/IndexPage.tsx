import React from "react";
import Link from "next/link";
import { Category } from "@mindfulstudio/tuscany-types/Category";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

type UICategory = Pick<Category, "name" | "slug">;

export type Props = {
  categories: UICategory[];
};

type CategoryTileProps = {
  name: string;
  url: string;
};

function CategoryTile({ name, url }: CategoryTileProps) {
  return (
    <Link href="[category]" as={url} passHref>
      <a
        css={css({
          cursor: "pointer",
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
    </Link>
  );
}

function IndexPage({ categories }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        {categories.map((c) => (
          <CategoryTile key={c.name} name={c.name} url={c.slug} />
        ))}
      </Container>
    </Layout>
  );
}

export default IndexPage;
