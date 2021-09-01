import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CurrentIndex from './CurrentIndex';

afterEach(cleanup);

test('the index is correctly padding the indexes', async () => {
  const { getByTestId } = render(<CurrentIndex index={'5'} maxSize={'22'} />);

  const currentIndex = getByTestId('current-index').textContent;
  expect(currentIndex).toBe('005 / 022');
});