import React from "react";
import Theme from "@mindfulstudio/tuscany-components/Theme";
import { css } from "@emotion/core";
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

export default function Index() {
  const { loading, error, data } = useQuery(CATEGORIES);
  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>{error.message}</p>;
  }

  const { categories }: { categories: Category[] } = data;
  return (
    <Theme>
      <div
        css={css`
          color: red;
        `}
      >
        colored
      </div>
      <IndexPage categories={categories} />
    </Theme>
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
