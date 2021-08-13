import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CampaignList from "./pages/CampaignList";
import Profile from "./pages/Profile"
import { createTheme } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
import { UpdateCampaign } from "./components/UpdateCampaign";
import { UpdateCampaignButton } from "./components/UpdateCampaignButton"
import { NewCampaignButton } from "./components/NewCampaignButton";
import { LoginButton } from "./components/LoginButton";
import { SignupButton } from "./components/SignupButton";


const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const theme = createTheme({
  type: dark,
  palette: {
    lightGreen: "#B4EFB8",
    darkGreen: "#77D47D",
    gray: "#666b6c",
    black: "#000000",
  },
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div style={{ backgroundColor: "#000000", height: '100vh' }}>
          <Navbar theme={theme} />

          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/campaigns" component={CampaignList}/>
            <Route exact path="/profile" component={Profile}/>
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
          <UpdateCampaignButton />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
