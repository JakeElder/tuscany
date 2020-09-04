import React from "react";
import { Plot } from "@mindfulstudio/tuscany-types/Plot";
import { css } from "@styled-system/css";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";
import { withGoogleMap, GoogleMap, Polygon } from "react-google-maps";
import averageGeolocation from "src/utils/average-geolocation";

export type Props = {
  plot: Plot;
};

function PlotPage({ plot }: Props) {
  const paths = plot.location.split("\n").map((c) => {
    const [lat, lng] = c.split(/\s?,\s?/).map(parseFloat);
    return { lat, lng };
  });

  return (
    <Layout>
      <Container>
        <Header />
        <h1 css={css({ fontSize: 4, marginBottom: 3 })}>{plot.name}</h1>
        <Map
          paths={paths}
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
          {plot.description}
        </p>
      </Container>
    </Layout>
  );
}

const Map = withGoogleMap(({ paths }: any) => {
  return (
    <GoogleMap defaultZoom={3} defaultCenter={averageGeolocation(paths)}>
      <Polygon
        paths={paths}
        options={{
          strokeColor: "#75B85A",
          fillColor: "#75B85A",
          strokeOpacity: 0.8,
          strokeWeight: 2,
        }}
      />
    </GoogleMap>
  );
});

export default PlotPage;
