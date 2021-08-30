import './Header.scss';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';

const Header = () => (
  <div className='header'>
    <Container>
      <Row>
        <Col xs={12} lg={12}>
          <img className='logo' alt='logo' src='/images/pokemon.svg' />
        </Col>
      </Row>
    </Container>
  </div>    
);

export default Header;