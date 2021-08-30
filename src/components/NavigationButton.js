import './NavigationButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const NavigationButton = props => {
  const { handleChange, disabled, children } = props;

  return (
    <Button className='navigation-button' variant="warning" 
      onClick={handleChange}
      disabled={disabled}>{children}</Button>
  );
};

NavigationButton.propTypes = {
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
};

NavigationButton.defaultProps = {
  disabled: false,
};

  
export default NavigationButton;