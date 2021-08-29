import './Header.scss';
import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import LanguageSelector from './LanguageSelector';

const Header = () => (
  <div className='header'>
    <Container>
      <Row>
        <Col xs={8} lg={10}>
          <img className='logo' alt='logo' src='/images/pokemon.svg' />
        </Col>
        <Col xs={4} lg={2} className='language'>
          <LanguageSelector />
        </Col>
      </Row>
    </Container>
  </div>    
);

export default Header;