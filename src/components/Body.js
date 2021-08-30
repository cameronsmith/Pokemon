
import './Body.scss';
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import usePokemons from '../hooks/usePokemons';
import { App } from '../constants';
import NavigationButton from './NavigationButton';
import limitValidator from '../utils/limitValidator';

const Body = () => {
  const {
    pokemonList, isError, isLoading
  } = usePokemons(App.POKEMONS_MAX_LIMIT);

  const [currentID, setCurrentID] = useState(0);

  const handleIDChange = (increase) => {
    let id = currentID;
    if (increase) {
      id++;
    } else {
      id--;
    }

    if (!limitValidator(id + 1)) {
      throw new Error('ID is not valid value.');
    }

    setCurrentID(id);
  };

  if ((!pokemonList.length && !isLoading) || !isError) {
    return (
      <Container className='body'>
        <Row className='center'>
          <Col xs={12} lg={12} className="loading">
            <div className="loader" />
            <p>{isError ? 'Unable to process an error occured' : 'Loading please wait...'}</p>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className='body'>
      <Row>
        <Col lg={6}>
          <NavigationButton handleChange={handleIDChange} nextValue={currentID - 1}/>
        </Col>
        <Col lg={6}>
          <div className="d-flex justify-content-end">
            <NavigationButton handleChange={handleIDChange} nextValue={currentID + 1} increase/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;