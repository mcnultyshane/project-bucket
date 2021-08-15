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
import Profile from "./pages/Profile";
import CampaignSingular from "./pages/CampaignSingular";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { dark } from "@material-ui/core/styles/createPalette";
import UserProvider from "./utils/UserContext";
// import { UpdateCampaign } from "./components/UpdateCampaign";
// import { UpdateCampaignButton } from "./components/UpdateCampaignButton"
// import { NewCampaignButton } from "./components/NewCampaignButton";
// import { LoginButton } from "./components/LoginButton";
// import { SignupButton } from "./components/SignupButton";


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
  overrides: {
    MuiCssBaseline: {
      '@global': {
         body: {
           background: 'linear-gradient(to right, black, gray, black)',
           backgroundRepeat: "no-repeat",
           backgroundAttachment: "fixed",
        },
      },
    },
  },
  type: dark,
  palette: {
    primary: {
      main: "#B4EFB8",
    },
    secondary: {
      main: "#77D47D",
    },
    gray: {
      main: "#545454",
    }, 
    black: "#000000",
  },
});
// backgroundColor: '#282c34',
const gradientStyle = {backgroundImage: 'radial-gradient(gray, #282c34 )'}
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <ThemeProvider theme={theme} >
        <div style={{ backgroundImage: 'radial-gradient(gray, #282c34 )', height: '100vh', margin: 0 }}>
          <UserProvider>
          <Navbar />

          <Switch style={gradientStyle}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/campaigns" component={CampaignList}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/singlecampaign" component={CampaignSingular}/>
            <Route render={() => <h1 className="display-2">Wrong page!</h1>} />
          </Switch>
          {/* <Footer /> */}
          </UserProvider>
        </div>
        </ThemeProvider>
      </Router>
    </ApolloProvider>
  );
}

export default App;
