import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Place } from "@mindfulstudio/tuscany-types/Place";
import LoadingPage from "../../components/LoadingPage";
import PlacePage from "../../components/PlacePage";

const PLACE = gql`
  query PlaceQuery($slug: String) {
    places(where: { slug: $slug }) {
      nameRoman
      description
      coordinates
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const { place } = router.query;

  const { loading, error, data } = useQuery(PLACE, {
    variables: { slug: place },
  });

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { places }: { places: Place[] } = data;

  return <PlacePage place={places[0]} />;
}
