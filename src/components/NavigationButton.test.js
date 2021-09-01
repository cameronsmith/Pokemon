import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavigationButton from './NavigationButton';

afterEach(cleanup);

test('navigation gets the correct text', async () => {
  const { getByTestId } = render(<NavigationButton
    handleChange={() => {}}
    testId={'navigation'}
    disabled={true}>Next</NavigationButton>
  );

  const currentIndex = getByTestId('navigation').textContent;
  expect(currentIndex).toBe('Next');
});

test('navigation is disabled', async () => {
  const { getByTestId } = render(<NavigationButton
    handleChange={() => {}}
    testId={'navigation'}
    disabled={true}>Next</NavigationButton>
  );

  const currentIndex = getByTestId('navigation');
  expect(currentIndex).toBeDisabled();
});

test('navigation is not disabled', async () => {
  const { getByTestId } = render(<NavigationButton
    handleChange={() => {}}
    testId={'navigation'}
    disabled={false}>Next</NavigationButton>
  );

  const currentIndex = getByTestId('navigation');
  expect(currentIndex).not.toBeDisabled();
});