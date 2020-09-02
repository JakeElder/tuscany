import React from "react";
import Link from "next/link";
import { Property } from "@mindfulstudio/tuscany-types/Property";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

type UIProperty = Pick<Property, "name" | "slug">;

export type Props = {
  properties: UIProperty[];
};

type PlaceToStayLinkProps = {
  name: string;
  url: string;
};

function PlaceToStayLink({ name, url }: PlaceToStayLinkProps) {
  return (
    <li css={css({ listStyle: "disc inside", marginBottom: 1 })}>
      <Link href="/places-to-stay/[place]" as={url} passHref>
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

function PlacesToStayPage({ properties }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        <ul>
          {properties.map((p) => (
            <PlaceToStayLink
              key={p.slug}
              name={p.name}
              url={`/places-to-stay/${p.slug}`}
            />
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export default PlacesToStayPage;
