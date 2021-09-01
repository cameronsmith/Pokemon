
import './Body.scss';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container } from 'react-bootstrap';
import NavigationButton from './NavigationButton';
import indexValidator from '../utils/indexValidator';
import CurrentIndex from './CurrentIndex';
import Card from './Card';
import { useQuery } from '@apollo/client';
import GET_POKEMON_QUERY from '../queries/pokemons';
import { App } from '../constants';

const Body = (props) => {
  const { fetchLimit } = props;

  const { loading: isLoading, error: isError, data } = useQuery(
    GET_POKEMON_QUERY,
    {
      variables: {
        fetchLimit,
      }
    }
  );
 
  let pokemonList = [];
  if (!isLoading || !isError) {
    pokemonList = data && data.pokemons && data.pokemons.length ? data.pokemons : [];
  }

  const [currentIndex, setCurrentIndex] = useState(0);

  if ((fetchLimit - 1) < currentIndex && currentIndex > 0) {
    setCurrentIndex(0);
  }

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
            <Col xs={12} lg={12} className='loading'>
              <div className='loader' />
              <p data-testid='loading-notice'>{isError ? `Unable to process an error occured: ${isError}` : 'Loading please wait...'}</p>
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
    <Container className='body' data-testid='pokemon'>
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
          <NavigationButton 
            handleChange={handleNavigationBack}
            testId={'back-navigation'}
            disabled={!indexValidator(backIndex, maxIndex)}>Back</NavigationButton>
        </Col>
        <Col xs={6} lg={6}>
          <div className='d-flex justify-content-end'>
            <NavigationButton
              handleChange={handleNavigationNext}
              testId={'next-navigation'}
              disabled={!indexValidator(nextIndex, maxIndex)}>Next</NavigationButton>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

Body.propTypes = {
  fetchLimit: PropTypes.number,
};

Body.defaultProps = {
  fetchLimit: App.POKEMONS_FETCH_LIMIT,
};

export default Body;