import React from "react";
import Link from "next/link";
import { Place } from "@mindfulstudio/tuscany-types/Place";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

export type Props = {
  place: Place;
};

function CategoryPage({ place }: Props) {
  return (
    <Layout>
      <Container>
        <Header />
        <h1 css={css({ fontSize: 4, marginBottom: 2 })}>{place.nameRoman}</h1>
        <p css={css({ color: "shades.4", lineHeight: "1.3" })}>
          {place.description}
        </p>
      </Container>
    </Layout>
  );
}

export default CategoryPage;
