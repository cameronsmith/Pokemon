
import './Body.scss';
import React, { useState } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import usePokemons from '../hooks/usePokemons';
import { App } from '../constants';
import NavigationButton from './NavigationButton';
import indexValidator from '../utils/indexValidator';
import CurrentIndex from './CurrentIndex';
import Card from './Card';

const Body = () => {
  const {
    pokemonList, isError, isLoading
  } = usePokemons(App.POKEMONS_FETCH_LIMIT);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigationNext = () => {
    setCurrentIndex(currentIndex + 1);
  };

  const handleNavigationBack = () => {
    setCurrentIndex(currentIndex - 1);
  };

  if (!pokemonList.length || isLoading || isError) {
    return (
      <Container className='body'>
        <div className='center-loading'>
          <Row>
            <Col xs={12} lg={12} className="loading">
              <div className="loader" />
              <p>{isError ? 'Unable to process an error occured' : 'Loading please wait...'}</p>
            </Col>
          </Row>
        </div>
      </Container>
    );
  }

  const { 
    name,
    number,
    image,
    resistant,
    weaknesses,
    attacks: {
      fast: fastAttacks = {},
      special: specialAttacks = {}
    }
  } = pokemonList[currentIndex];

  const nextIndex = currentIndex + 1;
  const backIndex = currentIndex - 1;
  const maxSize = pokemonList.length.toString();
  const maxIndex = Math.max(0, pokemonList.length - 1);



  return (
    <Container className='body'>
      <Row>
        <Col lg={12}>
          <CurrentIndex index={number} maxSize={maxSize} />
        </Col>
      </Row>
      <Row>
        <Col lg={12} className='center-content'>
          <Card 
            name={name}
            image={image}
            resistances={resistant}
            weaknesses={weaknesses}
            fastAttacks={fastAttacks}
            specialAttacks={specialAttacks}
          />
        </Col>
      </Row>
      <Row className='center-content'>
        <Col xs={6} lg={6}>
          <NavigationButton handleChange={handleNavigationBack} disabled={!indexValidator(backIndex, maxIndex)}>Back</NavigationButton>
        </Col>
        <Col xs={6} lg={6}>
          <div className="d-flex justify-content-end">
            <NavigationButton handleChange={handleNavigationNext} disabled={!indexValidator(nextIndex, maxIndex)}>Next</NavigationButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Body;