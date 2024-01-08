// App.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../App';

test('renders the counter app', () => {
  const { getByText, getByTestId } = render(<App />);

  expect(getByText('CinéDuRaT')).toBeInTheDocument();
});

test('adding a film to the favoritesr', () => {
  const { getByTestId } = render(<App />);
  const favButton = getByTestId('add-to-favorite');

  fireEvent.click(favButton);
  
  const sortDesc = getByTestId('flop');
  const sortAsc = getByTestId('top')

  fireEvent.click(sortDesc);
  // expect(counterValue).toHaveTextContent('1');

  fireEvent.click(sortAsc);
  // expect(counterValue).toHaveTextContent('0');
});