
import './Body.scss';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import usePokemons from '../hooks/usePokemons';
import { App } from '../constants';

const Body = () => {
  usePokemons(App.POKEMONS_MAX_LIMIT);

  return (
    <Container className='body'>
      <Row>
        <Col xs={12} lg={12} className="loading">
          <div className="loader" />
          <p>Loading please wait...</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;