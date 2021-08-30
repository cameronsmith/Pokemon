
import './Body.scss';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql
} from "@apollo/client";

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query Query {
        pokemons(first: 10) {
          name
        }
      }
    `
  })
  .then(result => console.log(result));

const Body = () => (
  <Container className='body'>
    <Row>
      <Col xs={12} lg={12} className="loading">
        <div className="loader" />
        <p>Loading please wait...</p>
      </Col>
    </Row>
  </Container>
);

export default Body;