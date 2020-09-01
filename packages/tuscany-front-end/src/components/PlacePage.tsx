import React from "react";
import { Place } from "@mindfulstudio/tuscany-types/Place";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export type Props = {
  place: Place;
};

function CategoryPage({ place }: Props) {
  const [lat, lng] = place.coordinates.split(/\s?,\s?/);
  return (
    <Layout>
      <Container>
        <Header />
        <Map
          lat={parseFloat(lat)}
          lng={parseFloat(lng)}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div style={{ height: `200px` }} css={css({ marginBottom: 3 })} />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
        <h1 css={css({ fontSize: 4, marginBottom: 2 })}>{place.nameRoman}</h1>
        <p css={css({ color: "shades.4", lineHeight: "1.3" })}>
          {place.description}
        </p>
      </Container>
    </Layout>
  );
}

const Map = withGoogleMap(({ lat, lng }: any) => {
  return (
    <GoogleMap defaultZoom={17} defaultCenter={{ lat, lng }}>
      <Marker position={{ lat, lng }} />
    </GoogleMap>
  );
});

export default CategoryPage;
