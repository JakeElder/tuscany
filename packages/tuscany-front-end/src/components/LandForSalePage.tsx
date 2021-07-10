import React from "react";
import Link from "next/link";
import { Plot } from "@mindfulstudio/tuscany-types/Plot";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

type UIPlot = Pick<Plot, "name" | "slug">;

export type Props = {
  plots: UIPlot[];
};

type PlaceToStayLinkProps = {
  name: string;
  url: string;
};

function PlaceToStayLink({ name, url }: PlaceToStayLinkProps) {
  return (
    <li css={css({ listStyle: "disc inside", marginBottom: 1 })}>
      <Link href="/land-for-sale/[plot]" as={url} passHref>
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

function LandForSalePage({ plots }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        <ul>
          {plots.map((p) => (
            <PlaceToStayLink
              key={p.slug}
              name={p.name}
              url={`/land-for-sale/${p.slug}`}
            />
          ))}
        </ul>
      </Container>
    </Layout>
  );
}

export default LandForSalePage;
