import { AppProps } from "next/app";
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

// import { globalStyles } from "../shared/styles";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CacheProvider value={cache}>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </CacheProvider>
  );
}

export default MyApp;
