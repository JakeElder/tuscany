import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Plot } from "@mindfulstudio/tuscany-types/Plot";
import LoadingPage from "../components/LoadingPage";
import LandForSalePage from "../components/LandForSalePage";

const PLOTS = gql`
  query PlotsQuery {
    plots {
      name
      slug
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const { category } = router.query;

  const { loading, error, data } = useQuery(PLOTS, {
    variables: { category },
  });

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { plots }: { plots: Plot[] } = data;

  return <LandForSalePage plots={plots} />;
}
