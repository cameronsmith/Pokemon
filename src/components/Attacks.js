import './Attacks.scss';
import React from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

const Attacks = props => {
  const { values, testId } = props;

  const items = values.filter(attackItem => attackItem.name).map((attackItem, index) => {
    const { damage, name, type } = attackItem;
    return (
      <tr key={index}>
        <td>{name}</td>
        <td>{type}</td>
        <td>{damage}</td>
      </tr>
    );
  });

  return (
    <div className='attacks'>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Damage</th>
          </tr>
        </thead>
        <tbody data-testid={testId}>
          {items}
        </tbody>
      </Table>
    </div>
  );
};

Attacks.propTypes = {
  values: PropTypes.array,
  testId: PropTypes.string,
};

Attacks.defaultProps = {
  testId: '',
};

export default Attacks;