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
  href: string;
  name: string;
  url?: string;
};

function CategoryTile({ href, name, url }: CategoryTileProps) {
  return (
    <Link href={href} as={url} passHref>
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
        <hr
          css={css({
            mb: 4,
            border: "1px dashed",
            borderColor: "shades.8",
          })}
        />
        <div
          css={css({
            mb: 4,
          })}
        >
          <h2
            css={css({
              fontSize: 3,
              marginBottom: 2,
            })}
          >
            Things to Do
          </h2>
          {categories.map((c) => (
            <CategoryTile
              key={c.name}
              href="/[category]"
              name={c.name}
              url={c.slug}
            />
          ))}
        </div>
        <div>
          <h2
            css={css({
              fontSize: 3,
              marginBottom: 2,
            })}
          >
            Come to Chiang Dao
          </h2>
          <CategoryTile href="/places-to-stay" name="Places to Stay" />
          <CategoryTile href="/land-for-sale" name="Land for Sale" />
        </div>
      </Container>
    </Layout>
  );
}

export default IndexPage;
