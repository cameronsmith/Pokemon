import './CurrentIndex.scss';
import React from 'react';
import PropTypes from 'prop-types';

const CurrentIndex = props => {
  const { index, maxSize } = props;

  return (
    <div className='current-index'>
      {index.padStart(3, '0')} / {maxSize.padStart(3, '0')}
    </div>
  );
};

CurrentIndex.propTypes = {
  maxSize: PropTypes.string,
  index: PropTypes.string,
};

export default CurrentIndex;