import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider, useTheme } from "emotion-theming";
import IndexPage from "@mindfulstudio/tuscany-components/IndexPage";
import { useQuery, gql } from "@apollo/client";
import { Category } from "@mindfulstudio/tuscany-types/Category";

const CATEGORIES = gql`
  query CategoriesQuery {
    categories {
      id
      name
    }
  }
`;

const H5 = styled.h5`
  ${(props) => {
    console.log(props.theme);
    return {};
  }}
`;

export default function Index() {
  const { loading, error, data } = useQuery(CATEGORIES);
  console.log(useTheme());
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { categories }: { categories: Category[] } = data;
  return (
    <ThemeProvider theme={{ colors: { green: "red" } }}>
      <H5>aa</H5>
      <div css={(theme) => ({ color: theme.thing })}>colored</div>
      <IndexPage categories={categories} />
    </ThemeProvider>
  );

  // return (
  //   <div>
  //     <Header>chiangdao.guide</Header>
  //     <h2>Categories</h2>
  //     <ul>
  //       {categories.map((category) => {
  //         return <li key={category.id}>{category.name}</li>;
  //       })}
  //     </ul>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );
}
