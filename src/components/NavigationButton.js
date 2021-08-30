import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import limitValidator from '../utils/limitValidator';

const NavigationButton = props => {
  const { handleChange, increase, nextValue } = props;
  console.log(nextValue);
  const disabled = !limitValidator(nextValue);

  return (
    <Button variant="warning" 
      onClick={() => handleChange(increase)}
      disabled={disabled}>{increase ? 'Next' : 'Back'}</Button>
  );
};

NavigationButton.propTypes = {
  nextValue: PropTypes.number, 
  increase: PropTypes.bool,
  handleChange: PropTypes.func,
};

NavigationButton.defaultProps = {
  increase: false,
};
  
export default NavigationButton;