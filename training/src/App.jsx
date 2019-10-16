import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";
import theme from "./theme";
import { PrivateLayout, AuthLayout } from "./layouts";
import {
  Trainee,
  GetTrainee,
  Login,
  NoMatch,
  TextFieldDemo,
  ChildrenDemo,
  InputDemo,
  TraineeDetail,
  UserMe,
  UpdateTrainee,
  DeleteTrainee
} from "./pages";
import ApolloClient from "apollo-client";
import { ApolloProvider } from "react-apollo";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";
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
  uri: "http://localhost:4000/",
  options: {
    headers: {
      authorization: localStorage.getItem("token")
    }
  }
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
  cache: new InMemoryCache()
});

function App() {
  return (
    <>
      <CssBaseline>
        <MuiThemeProvider theme={theme}>
          <ApolloProvider client={client}>
            <Router>
              <Switch>
                <Redirect exact from="/" to="/trainee" />
                <AuthLayout
                  exact
                  path="/login"
                  client={client}
                  component={Login}
                />
                <PrivateLayout
                  exact
                  path="/trainee/getTrainee"
                  component={GetTrainee}
                />
                <PrivateLayout
                  exact
                  path="/trainee/updateTrainee"
                  component={UpdateTrainee}
                />
                <PrivateLayout
                  exact
                  path="/trainee/deleteTrainee"
                  component={DeleteTrainee}
                />
                <PrivateLayout exact path="/trainee/me" component={UserMe} />
                <PrivateLayout
                  exact
                  client={client}
                  path="/trainee/:id"
                  component={TraineeDetail}
                />
                <PrivateLayout
                  exact
                  path="/trainee"
                  client={client}
                  component={Trainee}
                />
                <PrivateLayout
                  exact
                  path="/textField-demo"
                  component={TextFieldDemo}
                />
                <PrivateLayout exact path="/Input-demo" component={InputDemo} />
                <PrivateLayout
                  exact
                  path="/children-demo"
                  component={ChildrenDemo}
                />
                <Route component={NoMatch} />
              </Switch>
            </Router>
          </ApolloProvider>
        </MuiThemeProvider>
      </CssBaseline>
    </>
  );
}

export default App;
