import NextApp from "next/app";
import { ThemeProvider } from "@emotion/react";
import { CacheProvider } from "@emotion/core";
import { cache } from "emotion";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import fetch from "cross-fetch";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch,
  }),
});

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={{ thing: "red" }}>
        <CacheProvider value={cache}>
          <ApolloProvider client={client}>
            <Component {...pageProps} />
          </ApolloProvider>
        </CacheProvider>
      </ThemeProvider>
    );
  }
}
