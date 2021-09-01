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

test('when graphql error we display an error', async () => {
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

test('when network error we display an error', async () => {
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

test('when a valid request is complete we do not display loading', async () => {
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

test('main index text updates correctly when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const backButton = getByTestId('back-navigation');
  const nextButton = getByTestId('next-navigation');

  const currentIndex = getByTestId('current-index');
  expect(currentIndex.textContent).toBe('001 / 003');
  fireEvent.click(nextButton);
  expect(currentIndex.textContent).toBe('002 / 003');
  fireEvent.click(backButton);
  expect(currentIndex.textContent).toBe('001 / 003');
});

test('pokemon has a name when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  
  const { pokemons } = pokemonDataMock;

  const nextButton = getByTestId('next-navigation');
  const name = getByTestId('pokemon-name');

  expect(name.textContent).toBe(pokemons[0].name);
  fireEvent.click(nextButton);
  expect(name.textContent).toBe(pokemons[1].name);
});

test('a pokemon has an image when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  
  const { pokemons } = pokemonDataMock;

  const nextButton = getByTestId('next-navigation');
  const image = getByTestId('pokemon-image');

  expect(image.src).toBe(pokemons[0].image);
  fireEvent.click(nextButton);
  expect(image.src).toBe(pokemons[1].image);
});

test('a pokemon has resistances when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  const { pokemons } = pokemonDataMock;

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const nextButton = getByTestId('next-navigation');
  const resistances = getByTestId('resistances');

  const validateTest = (pokemonIndex) => {
    resistances.querySelectorAll('span').forEach((node, index) => {
      let resistant = pokemons[pokemonIndex].resistant[index];
      expect(node.textContent).toBe(resistant);
    });
  };

  validateTest(0);
  fireEvent.click(nextButton);
  validateTest(1);
});

test('a pokemon has weaknesses when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  const { pokemons } = pokemonDataMock;

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const nextButton = getByTestId('next-navigation');
  const weaknesses = getByTestId('weaknesses');

  const validateTest = (pokemonIndex) => {
    weaknesses.querySelectorAll('span').forEach((node, index) => {
      let weakness = pokemons[pokemonIndex].weaknesses[index];
      expect(node.textContent).toBe(weakness);
    });
  };
  
  validateTest(0);
  fireEvent.click(nextButton);
  validateTest(1);
});

test('a pokemon has fast attacks when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  const { pokemons } = pokemonDataMock;

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const nextButton = getByTestId('next-navigation');
  const fastAttacks = getByTestId('fast-attacks');

  const validateTest = (pokemonIndex) => {
    fastAttacks.querySelectorAll('tr').forEach((node, index) => {
      let { attacks: { fast } } = pokemons[pokemonIndex];
      let { damage, name, type } = fast[index];
      expect(node.querySelectorAll('td')[0].textContent).toBe(name);
      expect(node.querySelectorAll('td')[1].textContent).toBe(type);
      expect(node.querySelectorAll('td')[2].textContent).toBe('' + damage);
    });
  };
  validateTest(0);
  fireEvent.click(nextButton);
  validateTest(1);
});

test('a pokemon has special attacks when navigating', async () => {
  const { getByTestId } = render(
    <MockedProvider mocks={acceptMock} addTypename={false}>
      <Body fetchLimit={3} />
    </MockedProvider>
  );

  const { pokemons } = pokemonDataMock;

  await act(() => new Promise(resolve => setTimeout(resolve, 0)));
  const nextButton = getByTestId('next-navigation');
  const fastAttacks = getByTestId('special-attacks');

  const validateTest = (pokemonIndex) => {
    fastAttacks.querySelectorAll('tr').forEach((node, index) => {
      let { attacks: { special } } = pokemons[pokemonIndex];
      let { damage, name, type } = special[index];
      expect(node.querySelectorAll('td')[0].textContent).toBe(name);
      expect(node.querySelectorAll('td')[1].textContent).toBe(type);
      expect(node.querySelectorAll('td')[2].textContent).toBe('' + damage);
    });
  };
  validateTest(0);
  fireEvent.click(nextButton);
  validateTest(1);
});