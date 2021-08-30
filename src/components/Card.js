import './Card.scss';
import React from 'react';
import { Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import Stats from './Stats';

const Card = props => {
  const { name, image, resistances, weaknesses } = props;


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
          <Stats values={weaknesses} />
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
};

Card.defaultProps = {
  resistences: [],
  weaknesses: [],
};

export default Card;