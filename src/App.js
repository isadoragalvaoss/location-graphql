import "./App.css";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import Location from "./components/Location";

const errorLink = onError(({ graphqlErrors, networkError }) => {
  if (graphqlErrors) {
    // eslint-disable-next-line
    graphqlErrors.map(({ message, location, path }) => {
      alert(`Graphql error ${message}`);
    });
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: "https://api.everbase.co/graphql?apikey=7ce33980-9b0c-43c6-805c-7f6d0050ad7f",
  }),
]);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        {""}
        <Location></Location>
      </ApolloProvider>
    </div>
  );
}

export default App;
