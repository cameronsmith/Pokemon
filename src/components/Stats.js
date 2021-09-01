import './Stats.scss';
import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Stats = props => {
  const { values, color, testId } = props;

  const items = values.filter(name => name).map((name) => 
    <Badge key={name} bg='secondary' style={{backgroundColor: color}}>{name}</Badge>
  );

  return (
    <div className='stats' data-testid={testId}>
      {items}
    </div>
  );
};

Stats.propTypes = {
  values: PropTypes.array,
  color: PropTypes.string,
  testId: PropTypes.string,
};

Stats.defaultProps = {
  color: 'green',
  testId: '',
};

export default Stats;