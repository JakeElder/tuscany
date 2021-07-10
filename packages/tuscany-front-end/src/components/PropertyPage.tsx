import React from "react";
import { Property } from "@mindfulstudio/tuscany-types/Property";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";
import { withGoogleMap, GoogleMap, Marker } from "react-google-maps";

export type Props = {
  property: Property;
};

function PropertyPage({ property }: Props) {
  const [lat, lng] = property.location.split(/\s?,\s?/);
  return (
    <Layout>
      <Container>
        <Header />
        <h1 css={css({ fontSize: 4, marginBottom: 3 })}>{property.name}</h1>
        <Map
          lat={parseFloat(lat)}
          lng={parseFloat(lng)}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={
            <div
              style={{ height: `200px` }}
              css={css({
                marginBottom: 3,
                border: "1px solid",
                borderColor: "shades.8",
                padding: 1,
              })}
            />
          }
          mapElement={<div style={{ height: `100%` }} />}
        />
        <p css={css({ color: "shades.4", lineHeight: "1.3" })}>
          {property.fullDescription}
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

export default PropertyPage;
