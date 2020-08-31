import React from "react";
import styled from "@emotion/styled";
import { useQuery, gql } from "@apollo/client";
import { Category } from "@mindfulstudio/tuscany-types/Category";
import IndexPage from "../components/IndexPage";

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

  const { categories }: { categories: Category[] } = data;
  return <IndexPage categories={categories} />;
}
