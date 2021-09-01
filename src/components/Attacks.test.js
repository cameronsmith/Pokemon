import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Attacks from './Attacks';

afterEach(cleanup);

test('is attacks populating correctly', async () => {
  const attacksData =
    [
      {
        'name': 'Tackle',
        'type': 'Normal',
        'damage': 12
      },
      {
        'name': 'Vine Whip',
        'type': 'Grass',
        'damage': 7
      }
    ];

  const { getByTestId } = render(<Attacks values={attacksData} testId={'attacks'} />);

  const attacks = getByTestId('attacks');
  const attack = attacks.querySelectorAll('tr');

  expect(attack[0].querySelectorAll('td')[0].textContent).toBe('Tackle');
  expect(attack[0].querySelectorAll('td')[1].textContent).toBe('Normal');
  expect(attack[0].querySelectorAll('td')[2].textContent).toBe('12');

  expect(attack[1].querySelectorAll('td')[0].textContent).toBe('Vine Whip');
  expect(attack[1].querySelectorAll('td')[1].textContent).toBe('Grass');
  expect(attack[1].querySelectorAll('td')[2].textContent).toBe('7');
});