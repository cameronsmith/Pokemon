import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import { Endpoints } from '../constants';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

const client = new ApolloClient({
  uri: Endpoints.GET_POKEMONS,
  cache: new InMemoryCache()
});

const App = () => {
  return (
    <Container fluid>
      <Header />
      <ApolloProvider client={client}>
        <Body />
      </ApolloProvider>
      <Footer />
    </Container>
  );
};

export default App;
