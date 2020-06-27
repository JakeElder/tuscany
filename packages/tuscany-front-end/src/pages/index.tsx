import React from "react";
import Header from "@mindfulstudio/tuscany-components/Header";
import { useQuery, gql } from "@apollo/client";

const CATEGORIES = gql`
  query CategoriesQuery {
    categories {
      id
      name
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  return (
    <div>
      <Header>chiangdao.guide</Header>
      <h2>Categories</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
