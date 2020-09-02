import React from "react";
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { Plot } from "@mindfulstudio/tuscany-types/Plot";
import LoadingPage from "../../components/LoadingPage";
import PlotPage from "../../components/PlotPage";

const PLOT = gql`
  query PlotQuery($slug: String) {
    plots(where: { slug: $slug }) {
      name
      location
      description
      slug
    }
  }
`;

export default function Index() {
  const router = useRouter();
  const { plot } = router.query;

  const { loading, error, data } = useQuery(PLOT, {
    variables: { slug: plot },
  });

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { plots }: { plots: Plot[] } = data;

  return <PlotPage plot={plots[0]} />;
}
