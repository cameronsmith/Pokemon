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
        <Col lg={12} className='image'><img src={image} alt='pokemon'/></Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Resistances:</span>
          <Stats values={resistances} />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Weaknesses:</span>
          <Stats values={weaknesses} color={'red'}/>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Fast Attacks:</span>
          <Attacks values={fastAttacks}/>
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <span className='mini-title'>Special Attacks:</span>
          <Attacks values={specialAttacks}/>
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