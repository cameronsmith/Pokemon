import React from 'react';
import { render, cleanup, act, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import GET_POKEMON_QUERY from '../queries/pokemons';
import { GraphQLError } from 'graphql';
import Body from './Body';
import pokemonDataMock from '../mocks/pokemons.json';

afterEach(cleanup);

const acceptMock = [
  {
    request: {
      query: GET_POKEMON_QUERY,
      variables: {
        fetchLimit: 3,
      },
    },
    result: {
      data: pokemonDataMock,
    },
  },
];

test('when get pokemon query is pending we get loading', () => {
  const { getByTestId } = render(
    <MockedProvider addTypename={false}>
      <Body />
    </MockedProvider>
  );

  const loadingNotice = getByTestId('loading-notice');
  expect(loadingNotice).toBeDefined();
  expect(loadingNotice.textContent).toBe('Loading please wait...');
});

test('when graphql error we display error', async () => {
  const graphqlErrorMock = [
    {
      request: {
        query: GET_POKEMON_QUERY,
        variables: {
          fetchLimit: 3,
        },
      },
      result: {
        errors: [new GraphQLError()]
      },
    },
  ];

  const { getByTestId } = render(
    <MockedProvider mocks={graphqlErrorMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));

  const loadingNotice = getByTestId('loading-notice');
  expect(loadingNotice).toBeDefined();
  expect(loadingNotice.textContent).toContain('Unable to process an error occured');
});

test('when network error we display error', async () => {
  const networkErrorMock = [
    {
      request: {
        query: GET_POKEMON_QUERY,
        variables: {
          fetchLimit: 3,
        },
      },
      error: new Error('An error occurred'),
    },
  ];

  const { getByTestId } = render(
    <MockedProvider mocks={networkErrorMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));

  const loadingNotice = getByTestId('loading-notice');
  expect(loadingNotice).toBeDefined();
  expect(loadingNotice.textContent).toContain('Unable to process an error occured');
});

test('when valid pokemon returned from api we do not display loading', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  expect(getByTestId('pokemon')).toBeDefined();
});

test('back button is disabled and next button is enabled on zero index', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const backButton = getByTestId('back-navigation');
  const nextButton = getByTestId('next-navigation');
  expect(backButton).toBeDisabled();
  expect(nextButton).not.toBeDisabled();
});

test('buttons correctly disable and enable based on index', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const backButton = getByTestId('back-navigation');
  const nextButton = getByTestId('next-navigation');
  
  /**
   * clicking next button
   */
  // index 0 [disabled, enabled]
  expect(backButton).toBeDisabled();
  expect(nextButton).not.toBeDisabled();

  // index 1 [enabled, enabled]
  fireEvent.click(nextButton);
  expect(backButton).not.toBeDisabled();
  expect(nextButton).not.toBeDisabled();

  // index 2 [enabled, disabled]
  fireEvent.click(nextButton);
  expect(backButton).not.toBeDisabled();
  expect(nextButton).toBeDisabled();

  /**
   * clicking back button
   */
  // index 1 [enabled, enabled]
  fireEvent.click(backButton);
  expect(backButton).not.toBeDisabled();
  expect(nextButton).not.toBeDisabled();

  // index 0 [disabled, enabled]
  fireEvent.click(backButton);
  expect(backButton).toBeDisabled();
  expect(nextButton).not.toBeDisabled();
});