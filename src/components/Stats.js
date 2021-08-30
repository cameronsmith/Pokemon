import './Stats.scss';
import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Stats = props => {
  const { values, color } = props;

  const items = values.filter(name => name).map((name) => 
    <Badge key={name} bg="secondary" style={{backgroundColor: color}}>{name}</Badge>
  );

  return (
    <div className='stats'>
      {items}
    </div>
  );
};

Stats.propTypes = {
  values: PropTypes.array,
  color: PropTypes.string,
};

Stats.defaultProps = {
  color: 'green',
};

export default Stats;