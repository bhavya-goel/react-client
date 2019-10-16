import React from "react";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
import gql from "graphql-tag";
import ApolloClient from "apollo-client";
import { ApolloProvider, Subscription } from "react-apollo";
import { InMemoryCache } from "apollo-cache-inmemory";
import { setContext } from "apollo-link-context";

const wsLink = new WebSocketLink({
  uri: `ws://localhost:4000/`,
  options: {
    reconnect: true,
    connectionParams: {
      Authorization: localStorage.getItem("token")
    }
  }
});
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("token");
  return {
    headers: {
      ...headers,
      authorization: token
    }
  };
});
const httpLink = new HttpLink({
  uri: "http://localhost:4000/"
});

const link = split(
  // split based on operation type
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === "OperationDefinition" &&
      definition.operation === "subscription"
    );
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  request: operation => {
    operation.setContext({
      headers: {
        authorization: localStorage.getItem("token")
      }
    });
  }
});

const SubQuery = gql`
  subscription {
    traineeAdded {
      result {
        data {
          name
        }
        message
      }
    }
  }
`;

function App1() {
  return (
    <ApolloProvider client={client}>
      <Subscription subscription={SubQuery}>
        {({ data }, loading, error) => {
          console.log("data", data);
          console.log("loading", loading);
          console.log("error", error);
          return <p>Subscription</p>;
        }}
      </Subscription>
    </ApolloProvider>
  );
}

export default App1;
