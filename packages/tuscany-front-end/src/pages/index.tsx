import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Category } from "@mindfulstudio/tuscany-types/Category";
import LoadingPage from "../components/LoadingPage";
import IndexPage from "../components/IndexPage";

const CATEGORIES = gql`
  query CategoriesQuery {
    categories {
      id
      name
      slug
    }
  }
`;

export default function Index() {
  const { loading, error, data } = useQuery(CATEGORIES);

  if (loading) {
    return <LoadingPage />;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { categories }: { categories: Category[] } = data;
  return <IndexPage categories={categories} />;
}
