import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Card from './Card';

afterEach(cleanup);

test('a name is being displayed', async () => {
  const { getByTestId } = render( <Card 
    name={'Cameron Smith'}
    image={''}
    resistances={[]}
    weaknesses={[]}
    fastAttacks={[]}
    specialAttacks={[]}
  />);

  const card = getByTestId('pokemon-name').textContent;
  expect(card).toBe('Cameron Smith');
});