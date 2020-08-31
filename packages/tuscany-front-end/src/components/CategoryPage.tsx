import React from "react";
import Link from "next/link";
import { Place } from "@mindfulstudio/tuscany-types/Place";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

type UIPlace = Pick<Place, "nameRoman" | "slug">;

export type Props = {
  category: string;
  places: UIPlace[];
};

type PlaceLinkProps = {
  name: string;
  url: string;
};

function PlaceLink({ name, url }: PlaceLinkProps) {
  return (
    <li css={css({ listStyle: "disc inside", marginBottom: 1 })}>
      <Link href="/[category]/[place]" as={url} passHref>
        <a
          css={css({
            cursor: "pointer",
            textDecoration: "none",
            color: "link.1",

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
    </li>
  );
}

function CategoryPage({ places, category }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        <ul>
          {places.map((p) => (
            <PlaceLink
              key={p.slug}
              name={p.nameRoman}
              url={`/${category}/${p.slug}`}
            />
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export default CategoryPage;
