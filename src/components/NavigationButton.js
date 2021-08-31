import './NavigationButton.scss';
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

const NavigationButton = props => {
  const { handleChange, disabled, testId, children } = props;

  return (
    <Button className='navigation-button' variant="warning"  data-testid={testId}
      onClick={handleChange}
      disabled={disabled}>{children}</Button>
  );
};

NavigationButton.propTypes = {
  handleChange: PropTypes.func,
  disabled: PropTypes.bool,
  testId: PropTypes.string,
};

NavigationButton.defaultProps = {
  disabled: false,
  testId: '',
};

  
export default NavigationButton;