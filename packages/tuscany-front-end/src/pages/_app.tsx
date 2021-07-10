import type { AppProps } from "next/app";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";
import fetch from "cross-fetch";
import { globalStyles } from "../shared/styles";
import Theme from "../components/Theme";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: process.env.GRAPHQL_URL,
    fetch,
  }),
  defaultOptions: {
    watchQuery: {
      pollInterval: parseInt(process.env.POLL_INTERVAL as string, 10),
    },
  },
});

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme>
      {globalStyles}
      <CacheProvider value={cache}>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </CacheProvider>
    </Theme>
  );
}
