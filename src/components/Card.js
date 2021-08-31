import './Card.scss';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Stats from './Stats';
import Attacks from './Attacks';

const Card = props => {
  const { 
    name,
    image,
    resistances,
    weaknesses,
    fastAttacks,
    specialAttacks,
  } = props;


  return (
    <div className='card'>
      <Row>
        <Col lg={12} className='name'>{name}</Col>
      </Row>
      <Row>
        <Col lg={12} className='image'><img data-testid='pokemon-image' src={image} alt='pokemon'/></Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Resistances:</span>
          <Stats values={resistances} testId={'resistances'}/>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Weaknesses:</span>
          <Stats values={weaknesses} color={'red'} testId={'weaknesses'}/>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Fast Attacks:</span>
          <Attacks values={fastAttacks} testId={'fast-attacks'} />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Special Attacks:</span>
          <Attacks values={specialAttacks} testId={'special-attacks'}/>
        </Col>
      </Row>
    </div>
  );
};

Card.propTypes = {
  name: PropTypes.string,
  image: PropTypes.string,
  resistances: PropTypes.array,
  weaknesses: PropTypes.array,
  fastAttacks: PropTypes.array,
  specialAttacks: PropTypes.array,
};

Card.defaultProps = {
  resistences: [],
  weaknesses: [],
  fastAttacks: [],
  specialAttacks: [],
};

export default Card;