import React from 'react';
import { render, cleanup } from '@testing-library/react';
import NavigationButton from './NavigationButton';

afterEach(cleanup);

test('has navigation got correct text', async () => {
  const { getByTestId } = render(<NavigationButton
    handleChange={() => {}}
    testId={'navigation'}
    disabled={true}>Next</NavigationButton>
  );

  const currentIndex = getByTestId('navigation').textContent;
  expect(currentIndex).toBe('Next');
});

test('is navigation disabled', async () => {
  const { getByTestId } = render(<NavigationButton
    handleChange={() => {}}
    testId={'navigation'}
    disabled={true}>Next</NavigationButton>
  );

  const currentIndex = getByTestId('navigation');
  expect(currentIndex).toBeDisabled();
});

test('is navigation not disabled', async () => {
  const { getByTestId } = render(<NavigationButton
    handleChange={() => {}}
    testId={'navigation'}
    disabled={false}>Next</NavigationButton>
  );

  const currentIndex = getByTestId('navigation');
  expect(currentIndex).not.toBeDisabled();
});