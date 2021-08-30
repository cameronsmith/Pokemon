import './Stats.scss';
import React from 'react';
import { Badge } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Stats = props => {
  const { values } = props;

  const items = values.map((name) => 
    <Badge key={name} bg="secondary">{name}</Badge>
  );

  return (
    <div className='stats'>
      {items}
    </div>
  );
};

Stats.propTypes = {
  values: PropTypes.array,
};

export default Stats;