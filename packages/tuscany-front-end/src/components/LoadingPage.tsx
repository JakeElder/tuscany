import React from "react";
import Header from "./Header";
import Container from "./Container";
import Layout from "./Layout";

function LoadingPage() {
  return (
    <Layout>
      <Container>
        <Header />
        <span>loading...</span>
      </Container>
    </Layout>
  );
}

export default LoadingPage;
