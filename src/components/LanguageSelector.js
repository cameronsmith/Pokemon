import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

const handleChange = () => {
  console.log('here');
};
  
const LanguageSelector = () => (
  <Form className='d-flex justify-content-end'>
    <Form.Control as="select" aria-label="Select Language" onChange={handleChange}>
      <option value="en">English</option>
      <option value="es">Español</option>
    </Form.Control>
  </Form>
);

LanguageSelector.propTypes = {
  language: PropTypes.string,
};

LanguageSelector.defaultProps = {
  language: 'en',
};
  
export default LanguageSelector;