import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Place } from "@mindfulstudio/tuscany-types/Place";
import LoadingPage from "src/components/LoadingPage";
import CategoryPage from "src/components/CategoryPage";

const PLACES = gql`
  query PlacesQuery($category: String) {
    places(where: { categories: { slug_contains: $category } }) {
      id
      nameRoman
      slug
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const { category } = router.query;

  const { loading, error, data } = useQuery(PLACES, {
    variables: { category },
  });

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { places }: { places: Place[] } = data;

  return <CategoryPage category={category as string} places={places} />;
}
