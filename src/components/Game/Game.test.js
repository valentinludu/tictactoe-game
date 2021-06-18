import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';

test('renders Game component', () => {
  const { container } = render(<Game sendWinner={() => {}} players={{ player1: "Me", player2: "You" }} />);
  expect(container).toBeInTheDocument();
});
