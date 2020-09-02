import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Property } from "@mindfulstudio/tuscany-types/Property";
import LoadingPage from "../components/LoadingPage";
import PlacesToStayPage from "../components/PlacesToStayPage";

const PROPERTIES = gql`
  query PropertiesQuery {
    properties {
      name
      slug
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const { category } = router.query;

  const { loading, error, data } = useQuery(PROPERTIES, {
    variables: { category },
  });

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { properties }: { properties: Property[] } = data;

  return <PlacesToStayPage properties={properties} />;
}
