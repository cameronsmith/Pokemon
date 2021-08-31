import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Stats from './Stats';

afterEach(cleanup);

test('is stats populated correctly', async () => {
  const statsData =
    [
      "Water",
      "Electric",
      "Grass",
      "Fighting",
      "Fairy"
    ];

  const { getByTestId } = render(<Stats values={statsData} testId={'stats'} />);

  const stats = getByTestId('stats').querySelectorAll('span');

  expect(stats[0].textContent).toBe('Water');
  expect(stats[1].textContent).toBe('Electric');
  expect(stats[2].textContent).toBe('Grass');
  expect(stats[3].textContent).toBe('Fighting');
  expect(stats[4].textContent).toBe('Fairy');
});