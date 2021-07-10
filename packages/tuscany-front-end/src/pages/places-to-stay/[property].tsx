import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Property } from "@mindfulstudio/tuscany-types/Property";
import LoadingPage from "../../components/LoadingPage";
import PropertyPage from "../../components/PropertyPage";

const PROPERTY = gql`
  query PropertyQuery($slug: String) {
    properties(where: { slug: $slug }) {
      id
      name
      location
      fullDescription
      shortDescription
      slug
      availableForRent
      availableForSale
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const { property } = router.query;

  const { loading, error, data } = useQuery(PROPERTY, {
    variables: { slug: property },
  });

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { properties }: { properties: Property[] } = data;

  return <PropertyPage property={properties[0]} />;
}
